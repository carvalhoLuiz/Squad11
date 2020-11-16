import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/LoginView';
import { IndexView } from './pages/Index/IndexView';
import Register from './pages/Register/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexView} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
