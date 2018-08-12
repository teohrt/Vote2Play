import React, { Component } from 'react';

export default class GetStatus extends Component {
    constructor() {
        super();
        this.state = {
            con: ""
        };
    }

    componentDidMount() {
        fetch('http://localhost:3333')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ con: JSON.stringify(data) });
                console.log(data);
            }).catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <p>{this.state.con}</p>
            </div>
        )
    }
}