import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';

export default class Burger extends Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        return (
            <Menu>
                <a id="status" className="menu-item" href="/BlockchainStatus">Blockchain Status</a>
            </Menu>
        );
    }
}