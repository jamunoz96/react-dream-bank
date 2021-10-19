import React from 'react'
import { Route } from 'react-router-dom';
import Detail from 'src/components/Account/Detail';
import Summary from 'src/components/Account/Summary';
import Transaction from 'src/components/Account/Transaction';

const RoutesNavigation = () => {
    return <>
        <Route exact path="/account/summary" component={Summary} />
        <Route exact path="/account/detail/:id" component={Detail} />
        <Route exact path="/account/detail/:id/transaction/:id" component={Transaction} />
    </>
}

export default RoutesNavigation;
