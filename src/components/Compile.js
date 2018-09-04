import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Compile extends Component {
    constructor() {
        super();
        this.state = {
            itemID: "",
            responses: [],
            minedAddress: ""
        };

        this.handleIDChange = this.handleIDChange.bind(this);
        this.handleResponseChange = this.handleResponseChange.bind(this);
        this.postRequest = this.postRequest.bind(this);
    }

    // API call for status
    postRequest() {
        fetch('http://localhost:3333/compile', 
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
                    alert("Smart contract mined at: " + this.state.minedAddress);
                }
            ).catch(error => console.error(error));
    }

    handleIDChange (e) {
        this.setState({ itemID: e.target.value });
    }

    handleResponseChange (e) {
        var array = e.target.value.split(", ");
        this.setState({ responses: array });
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
                <p style={style}>Seperate individual responses by a comma and a space. ', ' </p>
                <p style={style}>(Ex: Response one, response two)</p>
                <Button bsStyle="success" onClick={this.postRequest}>Create Votable</Button>  
            </div>
        )
    }

    render() {
        return (
            <div>{this.getUserData()}</div>
        )
    }
}