import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import 'whatwg-fetch'
import 'es6-promise'
import counter from './reducers'
import './styles/reset.css'
import registerServiceWorker from './registerServiceWorker'
import Routers from './router'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
  rootEl
)

render()
store.subscribe(render)
registerServiceWorker()