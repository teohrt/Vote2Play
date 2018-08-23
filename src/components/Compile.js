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
    }

    // TODO: edit this for the compile API call
    // API call for status
    postRequest() {
        fetch('http://localhost:3333/compile', 
                {
                    method: 'post',
                    body: {
                        "itemID": this.state.itemID,
                        "responses": this.state.responses
                    }
                })
            .then(results => {
                return results.json();
            }).then(data => {
                    this.setState({ minedAddress: JSON.stringify(data.minedAddress) });
                }
            ).catch(error => console.error(error));
    }

    getUserData() {
        return (
            <div>
                <h2>Create Votable</h2>
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
                    name = "responses"
                    onChange = {this.handleChange}
                />
                <br />
                <Button bsStyle="success">Create Votable</Button>  
            </div>
        )
    }

    render() {
        return (
            <div>{this.getUserData()}</div>
        )
    }
}