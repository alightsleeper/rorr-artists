import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from '../Header'
import Performance from '../Performances/Performance'
import PerformanceForm from '../Performances/PerformanceForm'
import Review from '../Reviews/Review'
import ReviewForm from '../Reviews/ReviewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
const Column = styled.div`
    background: #eee1fa;
    height: 100vh;
    overflow: scroll;
    &:first-child {
        background: #000;
        color: #fff;
    }
    &:last-child {
        background: #bb73ff;
    }
`

const Artist = (props) => {
    const [artist, setArtist] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [performances, setPerformances] = useState([])
    const [performance, setPerformance] = useState({title: '', description: '', date: new Date().toISOString()})
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState({title: '', description: '', score: 0})

    useEffect( () => {
        const artist_id = props.match.params.id
        const url = `/api/v1/artists/${artist_id}`
        axios.get(url)
        .then( resp => {
            const artist = resp.data
            const attributes = artist.data.attributes
            setArtist(artist)
            setPerformances(attributes.performances)
            setReviews(attributes.reviews)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const reviewsList = reviews.map( (review, index) => {
        return (
            <Review key={index} attributes={review} />
        )
    })

    const performancesList = performances.map( (performance, index) => {
        return (
            <Performance key={index} attributes={performance} />
        )
    })

    return (
        <Wrapper>
        { loaded &&
            <Fragment>
                <Column>
                    <Header attributes={artist.data.attributes}/>
                    <PerformanceForm
                        artist={artist} 
                        performance={performance}
                        setPerformance={setPerformance}
                        performances={performances}
                        setPerformances={setPerformances}
                    />
                    <ReviewForm
                        artist={artist} 
                        review={review}
                        setReview={setReview}
                        reviews={reviews}
                        setReviews={setReviews}
                    />
                </Column>
                <Column>
                    {performancesList}
                </Column>
                <Column>
                    {reviewsList}
                </Column> 
            </Fragment>
        }
        </Wrapper>
    )
}

export default Artist
