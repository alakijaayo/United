import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import QuestionsPage from './QuestionsPage/QuestionsPage';

function Routes() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/beginner">
          <QuestionsPage />
        </Route>
        <Route exact path="/intermediate">
          <QuestionsPage />
        </Route>
        <Route exact path="/expert">
          <QuestionsPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>  
  )
}

export default Routes;