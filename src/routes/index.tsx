
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../views/login';
import Notfound from '../views/404';


export default class router extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/login" />} />
                    <Route path="/login" exact component={ Login } />

                    <Route component={ Notfound } />
                </Switch>
            </Router>
        )
    }
}