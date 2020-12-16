import React from 'react'
import Rating from './Reviews/Rating/Rating'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    border: 3px solid #00e3e3;
    border-radius: 40px;
    background: #fff;
    padding: 0 0 20px 0;
`
const Logo = styled.div`
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
const Name = styled.div`
    padding: 20px 0 10px 0;
`

const Card = (props) => {
    return (
        <Wrapper>
            <Link to={`/${props.type}/${props.id}`}>
                <Logo>
                    <img src={props.attributes.image_url} alt={props.attributes.name}/>
                </Logo>
            </Link>
            <Name>{props.attributes.name}</Name>
            <Rating score={props.attributes.avg_score} />
        </Wrapper>
    )
}

export default Card
