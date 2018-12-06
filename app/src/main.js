import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./containers/App";

import {IndexRoute, Redirect, Route, Router, hashHistory} from 'react-router';
import Create from "./containers/Create";
import Home from "./containers/Home";
import Deploy from "./containers/Deploy";
import Open from "./containers/Open";
import Ipfs from "./containers/Ipfs";
import Eth from "./containers/Eth";

console.log(Home);

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/create' component={Create}/>
            <Route path='/deploy' component={Deploy}/>
            <Route path='/open' component={Open}/>
            <Route path='/ipfs' component={Ipfs}/>
            <Route path='/Eth' component={Eth}/>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
    , document.getElementById('root'));
