import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthRoute from './middlewares/AuthRoute'
import Authenticated from './middlewares/Authenticated'
import AppContainer from '../pages/AppContainer/AppContainer'
import Login from '../pages/Login/Login'
import NewProduct from 'src/pages/NewProduct/NewProduct'
import MakeTransfer from 'src/pages/MakeTransfer/MakeTransfer'

const Routes = () => {
    return (
        <Switch>
          <AuthRoute path="/account/summary" component={AppContainer} />
          <AuthRoute path="/account/detail/:id" component={AppContainer} />
          <AuthRoute path="/account/detail/:id/transaction/:id" component={AppContainer} />
          <AuthRoute path="/new-product" component={NewProduct} />
          <AuthRoute path="/make-transfer" component={MakeTransfer} />
          <Authenticated path="/login" component={Login} />
          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
    );
}

export default Routes;
