import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Header from './components/header/header';
import Example from './components/example/example';
import States from './components/states/states';

ReactDOM.render(
    <Header/>,
    document.getElementById('reactappHeader')
);

ReactDOM.render(
    <HashRouter>
        <div className="container">
            <div className="menu"><Link to="/example">Example</Link></div>
            <div className="menu"><Link to="/states">States</Link></div>
        </div>
        <Route path="/states" component={States} />
        <Route path="/example" component={Example} />
    </HashRouter>,
    document.getElementById('reactapp')
);
