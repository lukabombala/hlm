import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import NavbarPage from "./components/Navbar.js"
import Body from "./components/Body.js"

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <NavbarPage/>
          <Body/>
      </React.Fragment>
    );
  }
}

export default App;
  