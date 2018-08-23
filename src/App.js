import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import BlockchainStatusPage from './components/BlockchainStatusPage';
import CompilePage from './components/CompilePage';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/BlockchainStatusPage" component={BlockchainStatusPage} />
                    <Route exact path="/CompilePage" component={CompilePage} />
                </div>
            </Router>
        );
    }
}