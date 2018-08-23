import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import Header from './Header';
import Compile from './Compile';

export default class CompilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Jumbotron>
                        <Compile />
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}