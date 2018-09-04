import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import Header from './Header';
import Change from './Change';

export default class CompilePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Grid>
                    <Jumbotron>
                        <Change />
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}