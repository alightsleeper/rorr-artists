import React from 'react'
import DateTimePicker from 'react-datetime-picker'
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
    const { artist, performance, performances, performanceInProgress, setPerformance, setPerformances, setPerformanceInProgress } = props
    
    const handleChange = (e) => {
        e.preventDefault()
        setPerformanceInProgress(true)
        setPerformance(Object.assign({}, performance, {"artist_id": artist.data.id, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const csrfToken = document.querySelector('[name=csrf-token]').content 
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        axios.post('/api/v1/performances', performance)
        .then( () => {
            performances.push(performance)
            setPerformances(performances)
            setPerformance({title: '', description: '', date: new Date().toISOString()})
            setPerformanceInProgress(false)
        })
        .catch(err => console.log(err))
    }

    const setPerformanceDate = (date) => {
        setPerformanceInProgress(true)
        setPerformance(Object.assign({}, performance, {"artist_id": artist.data.id, date: new Date(date).toISOString()}))
    }

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <FormTitle>Request a Performance:</FormTitle>
                <Field>
                    <DateTimePicker disableClock={true} onChange={setPerformanceDate} value={new Date(performance.date)} name="date"/>
                </Field>
                <Field>
                    <input type="text" onChange={handleChange} value={performance.title} name="title" placeholder="Title..." />
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
