import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mr-auto" href="/"><img src="/assets/images/immetrica-logo-1.gif" height="auto" width="100%" alt="Immetrica Logo" /></div>
                            {//<h1>Immetrica</h1> <h2>presents one solution for ALL </h2>
                            }
                        </div>
                    </div>
                </div>


                <Navbar light sticky="top" expand="md" navbar-static-top>
                    <div className="container-fluid">
                    {//    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/immetrica-logo-1.gif" height="30" width="autho" alt="Immetrica Logo" /></NavbarBrand> 
                    }
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/personall">
                                        <i className="fa fa-address-card fa-lg" /> PersonALL
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/visualization">
                                        <i className="fa fa-address-card fa-lg" /> Case Studies
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;