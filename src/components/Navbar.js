import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
        <MDBNavbar color='white'
                   light
                   expand="md"
        >
        <MDBContainer>
        <MDBNavbarBrand>
          <strong className="blue-text">HLM</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} color="	#0000FF"
        />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink className="nav-link, black-text" to="#!">Strona głowna</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link, black-text" to="#!">TODO</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link, black-text" to="#!">TODO</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2, black-text">TODO</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBBtn color="primary">
        <MDBIcon icon="magic" className="mr-1" /> Left
      </MDBBtn>
      <MDBBtn color="default">
        Right <MDBIcon icon="magic" className="ml-1" />
      </MDBBtn>
                </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;