import React, { Component } from 'react';

export default class Compile extends Component {
    constructor() {
        super();
        this.state = {
            itemID: "",
            responses: ""
        };
    }

    // TODO: edit this for the compile API call
    // API call for status
    componentDidMount() {
        fetch('http://localhost:3333')
            .then(results => {
                return results.json();
            }).then(data => {
                this.setState({ isCon: JSON.stringify(data.connected) });
                if (data.connected !== false) {
                    this.setState({ coinbase: JSON.stringify(data.coinbase) });
                    this.setState({ coinbaseBalance: JSON.stringify(data.coinbaseBalance) });
                }
            }).catch(error => console.error(error));
    }

    getUserData() {
        return (
            <div>
                <input 
                    type = "text"
                    placeholder = "Votable Name"
                    value = {this.props.itemID}
                    name = "itemID"
                    onChange = {this.handleChange}
                />
                <br />
                <input 
                    type = "text"
                    placeholder = "Responses"
                    value = {this.props.responses}
                    name = "itemID"
                    onChange = {this.handleChange}
                />
            </div>
        )
    }

    render() {
        return (
            <div>{this.getUserData()}</div>
        )
    }
}