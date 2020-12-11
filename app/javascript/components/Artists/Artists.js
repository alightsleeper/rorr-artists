import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Artist from './Artist'
import styled from 'styled-components'

const Home = styled.div`
    background: #eee1fa;
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    font-family: Helvetica, Arial, sans-serif

`
const Header = styled.div`
    padding: 50px 50px 10px 50px;

    h1 {
        font-size: 42px;
    }
`

const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Artists = () => {
    const [artists, setArtists] = useState([])

    useEffect( () => {
        axios.get('/api/v1/artists')
        .then( resp => setArtists(resp.data.data))
        .catch( resp => console.log(resp))
    }, [artists.length])

    const grid = artists.map( item => {
        console.log(item)

        return (
            <Artist 
                key={item.attributes.name}
                attributes={item.attributes}
                id={item.id}
            />
        )
    })

    return (
        <Home>
            <Header>
                <h1>Artists</h1>
                <Subheader>These are some artists you can review.</Subheader>
            </Header>
            <Grid>{grid}</Grid>
        </Home>
    )
}

export default Artists
