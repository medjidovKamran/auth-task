import React from 'react';
import {Redirect,Route, Switch} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import {LOGIN} from "../constants/constants";
import Main from "../pages/Main/Main";

const Routes = ({applicationState}) => {

    return (
        <Switch>
            <Route exact path='/'>
                <Main/>
            </Route>
            <Route exact path='/login'>
                <Login {...applicationState}/>
            </Route>
            <Route exact path='/register'>
                <Registration {...applicationState}/>
            </Route>
            {
                applicationState.state.isLogged
                    ? <Route exact path='/home'>
                        <Home {...applicationState}/>
                    </Route>
                    : <Redirect to={LOGIN}/>
            }

        </Switch>
    );
};

export default Routes;