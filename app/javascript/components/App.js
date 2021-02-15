import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
 } from 'react-router-dom'
import Artists from './Artists/Artists'
import Artist from './Artists/Artist'
import Venues from './Venues/Venues'
import Venue from './Venues/Venue'

const App = () => {
    return (
        <Router>
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
