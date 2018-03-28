import React from 'react'
import PageB from './PageB'
import PageC from './PageC'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/PageB' component={PageB} />
      <Route path='/PageC' component={PageC} />
    </Switch>
  </main>
)

export default Main
