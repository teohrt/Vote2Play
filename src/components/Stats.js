import React, { Component } from 'react';

export default class Stats extends Component {
    constructor() {
        super();
        this.state = {
            itemID: "",
            responses: [],
            counts: [],
            contractAddress: ""
        };
    }

    componentWillMount() {
        // API call to grab contract address
        fetch('http://localhost:3333/contracts')
            .then(results => {
                return results.json();
            }).then(data => {
                    this.setState({ 
                        itemID: data[0].itemID,
                        responses: data[0].responses,
                        contractAddress: data[0].address
                    });
                    
                    return fetch('http://localhost:3333/getResponseCounts',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            contractAddress: this.state.contractAddress
                        })
                    });
                }
            ).then(results => {
                return results.json();
            }).then(data => {   
                    console.log(data);
                    this.setState({ counts: data.data.value[1].counts });
                }
            ).catch(error => console.error(error));
    }

    render() {
        var tableData = this.state.responses.map((response, i) => {
            return (
                    <tr key={i}>
                        <td>{response}</td>
                        <td>{this.state.counts[i]}</td>
                    </tr>
            );
        });

        return (
            <div>
                <h2>Votable: {this.state.itemID}</h2>
                <table>
                    <tbody>
                    <tr>
                        <th>Response</th>
                        <th>Counts</th>
                    </tr>
                    {tableData}
                    </tbody>
                </table>
            </div>
        )
    }
}