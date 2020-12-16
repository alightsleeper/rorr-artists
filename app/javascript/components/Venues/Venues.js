import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Card from '../Card'
import styled from 'styled-components'

const Wrapper = styled.div`
    background: #000;
    font-family: Helvetica, Arial, sans-serif;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`
const Header = styled.div`
    color: #fff;
    padding: 20px;
    h1 {
        font-size: 42px;
    }
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    padding: 20px;
`

const Venues = () => {
    const [venues, setVenues] = useState([])

    useEffect( () => {
        axios.get('/api/v1/venues')
        .then( resp => setVenues(resp.data.data))
        .catch( resp => console.log(resp))
    }, [venues.length])

    const grid = venues.map( item => {
        return (
            <Card 
                type='venues'
                key={item.attributes.name}
                attributes={item.attributes}
                id={item.id}
            />
        )
    })

    return (
        <Wrapper>
            <Header>
                <h1>Venues</h1>
            </Header>
            <Grid>{grid}</Grid>
        </Wrapper>
    )
}

export default Venues
