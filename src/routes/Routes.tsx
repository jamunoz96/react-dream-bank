import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthRoute from './middlewares/AuthRoute'
import Authenticated from './middlewares/Authenticated'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

const Routes = () => {
    return (
        <div className="container mt-3">
          <Switch>
            <AuthRoute exact path="/" component={Home} />
            <Authenticated path="/login" component={Login} />
            <Route>
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
    );
}

export default Routes;
