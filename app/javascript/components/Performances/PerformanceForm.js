import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import styled from 'styled-components' 

const Wrapper = styled.div`
    background: #00e3e3;
    padding: 0 20px 20px 20px;
    font-family: Helvetica,Arial,sans-serif;
`
const FormTitle = styled.div`
    text-align: center;
    padding: 30px 0 10px 0;
    font-size: 24px;
    color: #fff
`
const Field = styled.div`
    padding: 10px 0;
    input {
        border: 0;
        border-radius: 4px;
        min-height: 40px;
        width: 99%;
    }
    textarea {
        border: 0;
        border-radius: 4px;
        font: 400 13.3333px Arial;
        min-height: 80px;
        width: 99%;
    }
`
const ErrorDiv = styled.div`
    color: red;
`
const SubmitButton = styled.button`
    background: #9221fc;
    color: #fff;
    border-radius: 4px;
    padding: 12px 0;
    margin: 10px 0 0 0;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #bb73ff;
    width: 100%;
    &:hover {
        background: #bb73ff;
        border: 1px solid #9221fc;
    }
    &:active {
        background: #eee1fa;
        color: #9221fc;
    }
    &:disabled {
        background: #d3d3d3;
        border: 1px solid #d3d3d3;
        cursor: default;
    }
`

const PerformanceForm = (props) => {
    const { artist, venue, performance, setPerformance, performances, setPerformances } = props
    const [artists, setArtists] = useState([])
    const [venues, setVenues] = useState([])
    const [performanceInProgress, setPerformanceInProgress] = useState(false)
    const [errors, setErrors] = useState([])

    if (artist) {
        useEffect( () => {
            axios.get('/api/v1/venues')
            .then( resp => setVenues(resp.data.data))
            .catch( resp => console.log(resp))
        }, [])
    }
    if (venue) {
        useEffect( () => {
            axios.get('/api/v1/artists')
            .then( resp => setArtists(resp.data.data))
            .catch( resp => console.log(resp))
        }, [])
    }

    const aOptions = artists.map( v => {
        return (
            <option key={v.id} value={v.id}>{v.attributes.name}</option>
        )
    })
    const vOptions = venues.map( v => {
        return (
            <option key={v.id} value={v.id}>{v.attributes.name}</option>
        )
    })

    const setPerformanceDate = (date) => {
        setErrors([])
        setPerformanceInProgress(true)
        if (artist) {
            setPerformance(Object.assign({}, performance, {"artist_id": artist.data.id, date: new Date(date).toISOString()}))
        }
        if (venue) {
            setPerformance(Object.assign({}, performance, {"venue_id": venue.data.id, date: new Date(date).toISOString()}))
        }
    }

    const setPerformanceArtist = (e) => {
        let title = ''
        const artist = artists.find(a => a.id == e.target.value)
        if (artist) {title = artist.attributes.name + " at " + venue.data.attributes.name}
        setErrors([])
        setPerformanceInProgress(true)
        setPerformance(Object.assign({}, performance, {"venue_id": venue.data.id, "artist_id": e.target.value, "title": title}))
    }

    const setPerformanceVenue = (e) => {
        let title = ''
        const venue = venues.find(v => v.id == e.target.value)
        if (venue) {title = artist.data.attributes.name + " at " + venue.attributes.name}
        setErrors([])
        setPerformanceInProgress(true)
        setPerformance(Object.assign({}, performance, {"artist_id": artist.data.id, "venue_id": e.target.value, "title": title}))
    }
  
    const handleChange = (e) => {
        e.preventDefault()
        setPerformanceInProgress(true)
        if (artist) {
            setPerformance(Object.assign({}, performance, {"artist_id": artist.data.id, [e.target.name]: e.target.value}))        
        }
        if (venue) {
            setPerformance(Object.assign({}, performance, {"venue_id": venue.data.id, [e.target.name]: e.target.value}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        const csrfToken = document.querySelector('[name=csrf-token]').content 
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        axios.post('/api/v1/performances', performance)
        .then( () => {
            performances.push(performance)
            performances.sort((first, second) => new Date(second.date) - new Date(first.date))
            setPerformances(performances)
            setPerformance({description: '', date: new Date().toISOString(), venue_id: '', artist_id: ''})
            setPerformanceInProgress(false)
        })
        .catch(err => {
            console.log(err)
            errors.push(err)
            setErrors(errors)
        })
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <FormTitle>Request a Performance:</FormTitle>
                { errors.length > 0 &&
                    errors.map( (error, index) => {
                        return (<ErrorDiv key={index}>Poop! {error.message}</ErrorDiv>)
                    })
                }
                <Field>
                    <DatePicker showTimeSelect dateFormat="E Pp" selected={new Date(performance.date)} onChange={setPerformanceDate} name="date" />
                </Field>
                <Field>
                    { artist &&
                        <select value={performance.venue_id} name="venue_id" onChange={setPerformanceVenue}>
                            <option value="">Select a Venue</option>
                            {vOptions}
                        </select>
                    }
                    { venue && 
                        <select value={performance.artist_id} name="artist_id" onChange={setPerformanceArtist}>
                            <option value="">Select an Artist</option>
                            {aOptions}
                        </select>
                    }
                </Field>
                <Field>
                    <textarea onChange={handleChange} value={performance.description} name="description" placeholder="Description..." />
                </Field>
                <SubmitButton disabled={!performanceInProgress} type="submit">Submit Performance Request</SubmitButton>
            </form>
        </Wrapper>
    )
}

export default PerformanceForm
