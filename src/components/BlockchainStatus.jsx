import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';

export default class BlockchainStatus extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h3>Is the Blockchain alive?!</h3>
                </Jumbotron>
            </Grid>
        )
    }
}