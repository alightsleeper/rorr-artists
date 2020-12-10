import React from 'react'
import Rating from '../Reviews/Rating/Rating'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    border-radius: 40px;
    background: #fff;
    padding: 0 0 20px 0;
`
const ArtistLogo = styled.div`
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;

    img {
        height: 150px;
        width: 150px;
        border-radius: 100%;
        border: 3px solid #efefef;
    }
`
const ArtistName = styled.div`
    padding: 20px 0 10px 0;
`

const Artist = (props) => {
    return (
        <Card>
            <Link to={`/artists/${props.attributes.slug}`}>
                <ArtistLogo>
                    <img src={props.attributes.image_url} alt={props.attributes.name}/>
                </ArtistLogo>
            </Link>
            <ArtistName>{props.attributes.name}</ArtistName>
            <Rating score={props.attributes.avg_score} />
        </Card>
    )
}

export default Artist
