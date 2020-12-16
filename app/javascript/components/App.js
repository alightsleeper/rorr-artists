import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Artists from './Artists/Artists'
import Artist from './Artist/Artist'
import Venues from './Venues/Venues'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Artists}/>
            <Route exact path="/artists" component={Artists}/>
            <Route exact path="/artists/:id" component={Artist}/>
            <Route exact path="/venues" component={Venues}/>

        </Switch>
    )
}

export default App
