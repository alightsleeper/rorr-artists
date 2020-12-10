import React from 'react'
import Rating from './Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 40px;
    padding: 20px;
    margin: 20px;
    font-family: Helvetica, Arial sans-serif;
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Title = styled.div`
    padding: 20px 0 10px 0;
    font-size: 18px;
`

const Description = styled.div`
    font-size: 14px;
`

const Review = (props) => {
    const { score, title, description } = props.attributes

    return (
        <Card>
            <RatingContainer>
                <Rating score={score} />
            </RatingContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

export default Review
