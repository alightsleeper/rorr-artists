import React, { Fragment, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components' 
import RatingFormInput from './Rating/RatingFormInput'

const Wrapper = styled.div`
    background: #f36ee4;
    padding: 0 20px 20px 20px;
    font-family: Helvetica,Arial,sans-serif;
`
const FormTitle = styled.div`
    text-align: center;
    padding: 30px 0 0 0;
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

const ReviewForm = (props) => {
    const { artist, venue, setReview, review, reviews, setReviews } = props
    const [reviewInProgress, setReviewInProgress] = useState(false)
    
    const handleChange = (e) => {
        e.preventDefault()
        setReviewInProgress(true)
        if (artist) {
            setReview(Object.assign({}, review, {"artist_id": artist.data.id, [e.target.name]: e.target.value}))
        } 
        if (venue) {
            setReview(Object.assign({}, review, {"venue_id": venue.data.id, [e.target.name]: e.target.value}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const csrfToken = document.querySelector('[name=csrf-token]').content 
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        axios.post('/api/v1/reviews', review)
        .then( () => {
            reviews.push(review)
            setReviews(reviews)
            setReview({title: '', description: '', score: 0})
            setReviewInProgress(false)
        })
        .catch(err => console.log(err))
    }

    const setRating = (score, e) => {
        e.preventDefault()
        setReviewInProgress(true)
        if (artist) {
            setReview(Object.assign({}, review, {"artist_id": artist.data.id, "score": score}))
        }
        if (venue) {
            setReview(Object.assign({}, review, {"venue_id": venue.data.id, "score": score}))
        }
    }

    const ratingOptions = [5,4,3,2,1].map( (score, index) => {
        return (
            <Fragment key={index}>
                <input type="radio" value={score} checked={review.score == score} name="rating" onChange={() => handleChange} id={`rating-${score}`}/>
                <label onClick={setRating.bind(this, score)}></label>
            </Fragment>
        )
    })

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <FormTitle>Add a Review:</FormTitle>
                <Field>
                    <RatingFormInput ratingOptions={ratingOptions} />
                </Field>
                <Field>
                    <input type="text" onChange={handleChange} value={review.title} name="title" placeholder="Title..." />
                </Field>
                <Field>
                    <textarea onChange={handleChange} value={review.description} name="description" placeholder="Description..." />
                </Field>
                <SubmitButton disabled={!reviewInProgress} type="submit">Submit Review</SubmitButton>
            </form>
        </Wrapper>
    )
}

export default ReviewForm
