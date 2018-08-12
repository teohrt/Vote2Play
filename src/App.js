import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import BlockchainStatus from './components/BlockchainStatus';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/BlockchainStatus" component={BlockchainStatus} />
                </div>
            </Router>
        );
    }
}