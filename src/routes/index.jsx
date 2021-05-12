import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/Home'
import Tela2 from '../components/Tela2'

export default function MainRoutes(){
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/:tela2" component={Tela2}/>
    </Switch>
  )
}
