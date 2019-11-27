import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Routes from './route'

class Page extends React.Component {
  public render() {
    console.log(Routes)
    return(
      <Switch>
        {
          Routes.map(route =>
          <Route key={route.path} path={route.path} component={route.component} />)
        }
      </Switch>
    )
  }
}

export default Page