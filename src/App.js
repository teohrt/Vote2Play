import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/HomePage';
import BlockchainStatusPage from './components/BlockchainStatusPage';
import CompilePage from './components/CompilePage';
import VotePage from './components/VotePage';
import StatsPage from './components/StatsPage';
import ChangePage from './components/ChangePage';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/BlockchainStatusPage" component={BlockchainStatusPage} />
                    <Route exact path="/CompilePage" component={CompilePage} />
                    <Route exact path="/VotePage" component={VotePage} />
                    <Route exact path="/StatsPage" component={StatsPage} />
                    <Route exact path="/ChangePage" component={ChangePafe} />
                </div>
            </Router>
        );
    }
}