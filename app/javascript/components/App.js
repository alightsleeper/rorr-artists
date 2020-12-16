import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
 } from 'react-router-dom'
import Artists from './Artists/Artists'
import Artist from './Artists/Artist'
import Venues from './Venues/Venues'
import Venue from './Venues/Venue'

const App = () => {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/venues">Venues</Link>
            <Switch>
                <Route exact path="/artists" component={Artists}/>
                <Route exact path="/artists/:id" component={Artist}/>
                <Route exact path="/venues" component={Venues}/>
                <Route exact path="/venues/:id" component={Venue}/>
            </Switch>
        </Router>
    )
}

export default App
