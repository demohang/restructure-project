import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'
import MyMajorPage from '../views/myMajorPage.jsx'

const Routers = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ MyMajorPage }/>
    </Switch>
  </main>
)

export default Routers