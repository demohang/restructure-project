import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import 'whatwg-fetch'
import 'es6-promise'
import { Provider } from 'react-redux'
import './styles/reset.css'
import registerServiceWorker from './registerServiceWorker'
import Routers from './router'
import './assets/fonts/iconfont.css'
import './styles/animations.css'
import configureStore from './store/configureStore'

const store = configureStore()
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>,
  rootEl
)

render()
registerServiceWorker()