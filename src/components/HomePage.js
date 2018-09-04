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
                        <p>This a simple implementation of my blockchain API. 
                            There is support for one blockchain account at this time. 
                            The account can create a votable by compiling and deploying a smart contract. 
                            This is as easy as a click of a button. 
                            After this, the user is able to interact with the contract further. 
                            You can easily vote, change your vote and access the contract'a statistics in the available menus.</p>
                    </Jumbotron>
                    <Link to="/BlockchainStatusPage">
                        <Button bsStyle="primary">Blockchain Status</Button>
                    </Link>
                </Grid>
            </div>
        )
    }
}