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
              <MDBNavLink className="nav-link, black-text" to="#!">Zastępy</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link, black-text" to="#!">Faza pucharowa</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2, black-text">o HLM</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Historia</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Regulamin</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Poprzednie edycje</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Pomoc</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" size="2x" className="pr-3" />
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