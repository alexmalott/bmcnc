import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Membership from "./containers/Membership";
import Login from "./containers/Login"
import NotFound from "./containers/NotFound";


export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/membership" exact component={Membership} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
    </Switch>;
