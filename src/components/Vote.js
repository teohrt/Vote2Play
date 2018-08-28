import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Vote extends Component {
    constructor() {
        super();
        this.state = {
            response: "",
            contractAddress: ""
        };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handleResponseChange = this.handleResponseChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.postRequest = this.postRequest.bind(this);
    }

    // API call for status
    postRequest() {
        fetch('http://localhost:3333/vote', 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        itemID: this.state.itemID,
                        responses: this.state.responses
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

    handleIDChange (e) {
        this.setState({ itemID: e.target.value });
    }

    handleResponseChange (e) {
        var array = e.target.value.split(",");
        this.setState({ responses: array });
    }

    handleButton () {
        //alert(this.state.responses);
        this.postRequest();
    }

    getUserData() {

        var style = {
            fontSize: 15
        }

        return (
            <div>
                <h2>Create Votable</h2>
                <input 
                    type = "text"
                    placeholder = "Votable Name"
                    value = {this.props.itemID}
                    name = "itemID"
                    onChange = {this.handleIDChange}
                />
                <br />
                <input 
                    type = "text"
                    placeholder = "Responses"
                    value = {this.props.responses}
                    name = "responses"
                    onChange = {this.handleResponseChange}
                />
                <br />
                <p style={style}>Seperate individual responses by a comma.</p>
                <Button bsStyle="success" onClick={this.handleButton}>Create Votable</Button>  
            </div>
        )
    }

    render() {
        return (
            <div>{this.getUserData()}</div>
        )
    }
}