import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon, MDBBtn
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false,
  active: [true, null, null, null]
  
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

toggleCollapseFalse = () => {
  this.setState({ isOpen: false });
}

toggleActive = (ind) => {
  const activeitems = this.state.active.slice();
  activeitems.forEach(function (item, index) {
    activeitems.splice(index, 1, null);
  });
  activeitems.splice(ind, 1, true);
  this.setState({active: activeitems})
}

render() {
  const active = this.state.active;
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
            <MDBNavItem active={active[0]}>
              <MDBNavLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("mainpage");this.toggleCollapseFalse();this.toggleActive(0)}}>Strona głowna</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={active[1]}>
              <MDBNavLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("troopspage");this.toggleCollapseFalse();this.toggleActive(1)}}>Zastępy</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem active={active[2]}>
              <MDBNavLink className="nav-link, black-text" to="#!" onClick={() => {this.props.handleClick("regulationspage");this.toggleCollapseFalse();this.toggleActive(2)}}>Regulamin</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2, black-text">o HLM</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Historia</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Poprzednie edycje</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Najczęściej zadawane pytania</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Kontakt </MDBDropdownItem>
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