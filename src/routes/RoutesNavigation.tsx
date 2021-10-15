import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const RoutesNavigation = () => {

  const Summary = React.lazy(() => import("src/components/Account/Summary"));
  const All = React.lazy(() => import("src/components/Account/All"));

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
