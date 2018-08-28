import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import Header from './Header';
import Vote from './Vote';

export default class VotePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Jumbotron>
                        <Vote />
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}