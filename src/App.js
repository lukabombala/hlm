import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import "./index.css";
import NavbarPage from "./components/Navbar.js"
import Body from "./components/Body.js"
import MainPage from "./components/MainPage.js"
import FooterPage from "./components/FooterPage";
import ResultsCard from "./components/ResultsCard"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarPage/>
          <MDBContainer style={{ marginTop: '25px' }}>
            <ResultsCard/>
            <MainPage/>
          </MDBContainer>
          <FooterPage/>
      </React.Fragment>
    );
  }
}

export default App;
  