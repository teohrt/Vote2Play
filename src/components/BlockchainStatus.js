import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import GetStatus from './GetStatus';

export default class BlockchainStatus extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <GetStatus />
                </Jumbotron>
            </Grid>
        )
    }
}