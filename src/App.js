import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import NavbarPage from "./components/Navbar.js"
import Body from "./components/Body.js"
import MainPage from "./components/MainPage.js"
import FooterPage from "./components/FooterPage";
import TablePage from "./components/ResultsTable"

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <NavbarPage/>
          <MainPage/>
          <TablePage/>
          <FooterPage/>
      </React.Fragment>
    );
  }
}

export default App;
  