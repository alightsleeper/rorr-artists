import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PerformancesReducer from '../reducers/PerformancesReducer'
import App from '../components/App'

const performances = createStore(PerformancesReducer)
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={performances}>
      <App />
    </Provider>, 
    document.body.appendChild(document.createElement('div'))
  )
})
