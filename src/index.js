import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import 'whatwg-fetch'
import 'es6-promise'
import readFun from './reducers'
import { Provider } from 'react-redux'
import './styles/reset.css'
import registerServiceWorker from './registerServiceWorker'
import Routers from './router'
import './assets/fonts/iconfont.css'
import './styles/animations.css'

const store = createStore(readFun)
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

// https://github.com/xianyulaodi/react-redux
// https://www.cnblogs.com/xianyulaodi/p/5691382.html