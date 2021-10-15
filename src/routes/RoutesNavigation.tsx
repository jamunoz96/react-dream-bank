import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import All from 'src/components/Account/All';
import Summary from 'src/components/Account/Summary';

const RoutesNavigation = () => {
    return (
        <div>
          <Route path="/account/summary" component={Summary} />
          <Route path="/account/all" component={All} />
          <Route>
            <Redirect to="summary" />
          </Route>
        </div>
    );
}

export default RoutesNavigation;
