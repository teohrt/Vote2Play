import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import Header from './Header';
import Stats from './Stats';

export default class VotePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Jumbotron>
                        <Stats />
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}