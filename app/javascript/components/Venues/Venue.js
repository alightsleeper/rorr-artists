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

const Venue = (props) => {
    const [venue, setVenue] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [performances, setPerformances] = useState([])
    const [performance, setPerformance] = useState({title: '', description: '', date: new Date().toISOString()})
    const [performanceInProgress, setPerformanceInProgress] = useState(false)
    const [reviews, setReviews] = useState([])
    const [review, setReview] = useState({title: '', description: '', score: 0})
    const [reviewInProgress, setReviewInProgress] = useState(false)

    useEffect( () => {
        const venue_id = props.match.params.id
        const url = `/api/v1/venues/${venue_id}`
        axios.get(url)
        .then( resp => {
            const venue = resp.data
            const attributes = venue.data.attributes
            setVenue(venue)
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
                    <Header attributes={venue.data.attributes}/>
                    {/* <PerformanceForm
                        venue={venue} 
                        performance={performance}
                        performances={performances}
                        performanceInProgress={performanceInProgress}
                        setPerformance={setPerformance}
                        setPerformances={setPerformances}
                        setPerformanceInProgress={setPerformanceInProgress}
                    />
                    <ReviewForm
                        venue={venue} 
                        review={review}
                        reviews={reviews}
                        reviewInProgress={reviewInProgress}
                        setReview={setReview}
                        setReviews={setReviews}
                        setReviewInProgress={setReviewInProgress}
                    /> */}
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

export default Venue
