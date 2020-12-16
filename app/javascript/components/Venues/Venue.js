import React from 'react'
import Rating from '../Reviews/Rating/Rating'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 3px solid #00e3e3;
    border-radius: 40px;
    background: #fff;
    padding: 0 0 20px 0;
`
const VenueLogo = styled.div`
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
        border: 3px solid #00e3e3;
    }
`
const VenueName = styled.div`
    padding: 20px 0 10px 0;
`

const Venue = (props) => {
    return (
        <Card>
            <Link to={`/venues/${props.id}`}>
                <VenueLogo>
                    <img src={props.attributes.image_url} alt={props.attributes.name}/>
                </VenueLogo>
            </Link>
            <VenueName>{props.attributes.name}</VenueName>
            <Rating score={props.attributes.avg_score} />
        </Card>
    )
}

export default Venue
