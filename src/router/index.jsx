import React from 'react'

import {
  Route,
  Switch
} from 'react-router-dom'
import MyMajorPage from '../views/myMajorPage.jsx'
import paperPage from '../views/paperPage.jsx'

const Routers = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ MyMajorPage }/>
      <Route exact path='/paperPage' component={ paperPage }/>
    </Switch>
  </main>
)

export default Routers