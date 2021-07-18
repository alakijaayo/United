import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage/Homepage';

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>  
  )
}

export default Routes;