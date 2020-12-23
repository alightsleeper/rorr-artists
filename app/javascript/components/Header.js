import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    font-family: Helvetica, Arial, sans-serif;
    padding: 0 0 20px 0;
    h1 {
        margin: 0;
        padding: 0;
        font-size: 40px;
    }
    img {
        margin: 20px 0 -50px 20px;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 3px solid #efefef;
    }
`
const ReviewsAndRatingAvg = styled.div`
    font-size: 18px;
    p {
        margin: 0 0 0 120px;
        padding: 0;
    }
`

const Header = (props) => {
    const { name, image_url, avg_score, reviews } = props.attributes
    const [averageScore, setAverageScore] = useState(avg_score)
    
    useEffect( () => {
        const scores = []
        reviews.map( (review) => {scores.push(review.score)} )
        if (scores.length > 0) {
            const newAvg = scores.reduce((a, b) => a + b) / scores.length
            setAverageScore(newAvg.toFixed(2))    
        }
    }, [reviews.length])

    return (
        <Wrapper>
            <h1><img src={image_url} alt={name} /> {name}</h1>
            <ReviewsAndRatingAvg>
                <p><strong>Average Rating:</strong> {averageScore} (out of 5)</p>
                <p><strong>Total Reviews:</strong> {reviews.length}</p>
            </ReviewsAndRatingAvg>
        </Wrapper>

    )
}

export default Header
