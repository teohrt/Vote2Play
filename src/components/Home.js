import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import Header from './Header';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Grid>
                    <Jumbotron>
                        <h2>Welcome to Vote2Play!</h2>
                        <p>Blockchain is cool!</p>
                    </Jumbotron>
                    <Link to="/BlockchainStatus">
                        <Button bsStyle="primary">Blockchain Status</Button>
                    </Link>
                </Grid>
            </div>
        )
    }
}