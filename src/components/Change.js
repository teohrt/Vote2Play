import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Change extends Component {
    constructor() {
        super();
        this.state = {
            itemID: "",
            responses: [],
            response: "",
            contractAddress: ""
        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.voteRequest = this.voteRequest.bind(this);
    }

    // API call to grab available votable responses and address
    componentWillMount() {
        fetch('http://localhost:3333/contracts')
            .then(results => {
                return results.json();
            }).then(data => {
                    this.setState({ responses: data[0].responses,
                                    contractAddress: data[0].address,
                                    itemID: data[0].itemID });
                }
            ).catch(error => console.error(error));
    }

    // API call for vote transaction
    voteRequest() {
        fetch('http://localhost:3333/changeVote', 
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
                    this.setState({ result: JSON.stringify(data.data.value) });
                    this.state.result === 'true' ? alert("Vote changed!") : alert("Error!");
                }
            ).catch(error => console.error(error));
    }

    handleOptionChange(e) {
        this.setState({ response: e.target.value });
    }

    render() {
        var elements = this.state.responses.map((response, i) => {
            return (
                <div key={i}>
                    <label>
                        <input 
                            type = "radio"
                            name = "response"
                            value = {response}
                            onChange = {this.handleOptionChange}
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
                <h3>Change your vote to...</h3>
                {elements}
                <Button bsStyle="success" onClick={this.voteRequest}>Change!</Button>  
            </div>
        )
    }
}