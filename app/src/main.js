import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";

import {IndexRoute, Redirect, Route, Router, hashHistory} from 'react-router';
import Create from "./containers/Create";
import Home from "./containers/Home";
import Deploy from "./containers/Deploy";

console.log(Home);

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/create' component={Create}/>
            <Route path='/deploy' component={Deploy}/>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
    , document.getElementById('root'));
