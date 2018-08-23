import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Vote2Play</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/BlockchainStatusPage">
                        Network Status
                    </NavItem>
                    <NavDropdown eventKey={2} title="Options" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1} href="/CompilePage" >Create Votable</MenuItem>
                        <MenuItem eventKey={2.2}>Vote</MenuItem>
                        <MenuItem eventKey={2.3}>Change Vote</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.4}>Votable Statistics</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}