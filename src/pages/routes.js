import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import Profile from "./Profile";
import { SIGN_IN, SIGN_OUT, URLS } from '../constants';

const Routes = ({applicationState}) => {

    return (
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path={URLS.login}>
                <Login {...applicationState}/>
            </Route>
            <Route exact path={URLS.register}>
                <Registration {...applicationState}/>
            </Route>
            {
                applicationState.state.isLogged
                    ? <Route exact path={URLS.profile}>
                        <Profile {...applicationState}/>
                    </Route>
                    : <Redirect to={URLS.home}/>
            }

        </Switch>
    );
};

export default Routes;