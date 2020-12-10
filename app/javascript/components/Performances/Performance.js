import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 20px;
    margin: 20px 20px 20px 0;
    font-family: Helvetica, Arial sans-serif;
    color: #000;
`
const Date = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const Title = styled.div`
    font-size: 18px;
`

const Description = styled.div`
    font-size: 14px;
`

const Performance = (props) => {
    const { date, title, description } = props.attributes

    return (
        <Card>
            <Date>{date}</Date>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

export default Performance
