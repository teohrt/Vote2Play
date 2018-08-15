import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import GetStatus from './GetStatus';
import Header from './Header';

export default class BlockchainStatus extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Jumbotron>
                        <GetStatus />
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}