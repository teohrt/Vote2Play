import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Vote extends Component {
    constructor() {
        super();
        this.state = {
            itemID: "",
            responses: [],
            response: "",
            contractAddress: ""
        };

        this.handleButton = this.handleButton.bind(this);
        this.voteRequest = this.voteRequest.bind(this);
    }

    // API call to grab available votable responses
    componentWillMount() {
        fetch('http://localhost:3333/contracts')
            .then(results => {
                return results.json();
            }).then(data => {
                    this.setState({ itemID: data[0].itemID })
                    this.setState({ responses: data[0].responses });
                    this.setState({ contractAddress: JSON.stringify(data[0].address) });
                }
            ).catch(error => console.error(error));
    }

    // API call for vote transaction
    voteRequest() {
        fetch('http://localhost:3333/vote', 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        response: this.state.response,
                        contractAddress: this.state.contractAddress
                    })
                })
            .then(results => {
                return results.json();
            }).then(data => {
                    this.setState({ minedAddress: JSON.stringify(data.result.minedAddress) });
                    console.log(this.state.minedAddress);
                }
            ).catch(error => console.error(error));
    }

    handleButton () {
        this.voteRequest();
    }

    render() {
        var elements = this.state.responses.map((response, i) => {
            return (
                <div key={i}>
                    <label>
                        <input 
                            type = "radio"
                            name = "itemID"
                        />
                        {response}
                    </label>
                    <br />
                </div>
            );
        });

        return (
            <div>
                <h2>Votable: {this.state.itemID}</h2>
                {elements}
                <Button bsStyle="success" onClick={this.handleButton}>Vote!</Button>  
            </div>
        )
    }
}