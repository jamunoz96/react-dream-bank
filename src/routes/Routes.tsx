import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthRoute from './middlewares/AuthRoute'
import Authenticated from './middlewares/Authenticated'
import AppContainer from '../pages/AppContainer/AppContainer'
import Login from '../pages/Login/Login'

const Routes = () => {
    return (
        <Switch>
          <AuthRoute path="/account" component={AppContainer} />
          <Authenticated path="/login" component={Login} />
          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
    );
}

export default Routes;
