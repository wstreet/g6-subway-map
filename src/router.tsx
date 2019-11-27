import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '@/app/index'

export default class RouteMap extends React.PureComponent {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} />
          <Route render={() => <span>404</span>} />
        </Switch>
      </Router>
    )
  }
}