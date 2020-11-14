import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/LoginView';
import { IndexView } from './pages/Index/IndexView';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexView} />
            </Switch>
        </BrowserRouter>
    );
}
