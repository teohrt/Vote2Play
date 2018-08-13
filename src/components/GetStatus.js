import React, { Component } from 'react';

export default class GetStatus extends Component {
    constructor() {
        super();
        this.state = {
            isCon: "",
            coinbase: "",
            coinbaseBalance: ""
        };
    }

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

    displayDataDependingOnStatus() {
        var con = this.state.isCon === "true" ? true: false;

        if (con) {
            return (
                <div>
                    <p>Blockchain conncted!</p>
                    <p>Coinbase: {this.state.coinbase}</p>
                    <p>Balance: {this.state.coinbaseBalance}</p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>Blockchain disconnected!</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div>{this.displayDataDependingOnStatus()}</div>
        )
    }
}