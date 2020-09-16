import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import "./index.css";
import NavbarPage from "./components/Navbar.js"
import Body from "./components/Body.js"
import MainPage from "./components/pages/MainPage.js"
import Footer from "./components/Footer";
import ResultsCard from "./components/ResultsCard"
import TroopsPage from "./components/pages/TroopsPage.js";
import RegulationsPage from "./components/pages/RegulationsPage/RegulationsPage.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menudisplay: {
          mainpage: false,
          troopspage: false,
          regulationspage: true,
      },
    };
  }

  handleMenuButtonClick = (name) => {
    const menudisplay = this.state.menudisplay;
    Object.keys(menudisplay).forEach(key => menudisplay[key] = false)
    menudisplay[name] = true;
    this.setState({menudisplay});
    
  }

  componentDidMount() {
    document.title = "Harcerska Liga Mistrzów"
  }
  
  render() {
    return (
      <React.Fragment>
        <NavbarPage handleClick={this.handleMenuButtonClick}/>
          <MDBContainer style={{ marginTop: '25px' }}>

            {this.state.menudisplay.mainpage && 
              <React.Fragment>
                <ResultsCard/>
                <MainPage/>
              </React.Fragment> 
            }

            {this.state.menudisplay.troopspage &&
              <React.Fragment>
                <TroopsPage/>
              </React.Fragment>
            }

            {this.state.menudisplay.regulationspage &&
              <React.Fragment>
                <RegulationsPage/>
              </React.Fragment>
            }

          </MDBContainer>
          <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
