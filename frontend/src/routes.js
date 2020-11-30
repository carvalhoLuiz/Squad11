import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/LoginView';
import { IndexView } from './pages/Index/IndexView';
import Register from './pages/Register/Register';
import { HomeView } from './pages/Home/HomeView';
import { Jogos } from './pages/Jogos/Jogos';
import { Perfil } from './pages/Perfil/Perfil';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexView} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
                <Route path="/home" component={HomeView} />
                <Route path="/jogos" component={Jogos} />
                <Route path="/perfil" component={Perfil} />
            </Switch>
        </BrowserRouter>
    );
}
