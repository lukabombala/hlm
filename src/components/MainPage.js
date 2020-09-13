import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow , MDBCard, MDBCardBody, MDBMask, MDBView, MDBIcon} from "mdbreact";
import LargeNewsCard from "./LargeNewsCard.js";
import SmallNewsCard from "./SmallNewsCard.js";

class MainPage extends Component {
    render() {
        return(
            <React.Fragment>
              <MDBContainer>
                
              <hr className="my-5"/>
              <h2 className="h1 text-center my-5 font-weight-bold">Aktualności</h2>
               <MDBContainer style={{ marginTop: '20px' }}
               >
                <MDBRow>
                  <MDBCol lg="6" md="12">
              
                    <LargeNewsCard title="Koniec sezonu HLM" image="https://lh3.googleusercontent.com/proxy/KDTyXg5eQRxGzrLIDgdmq9E1Cvc3rbwWJA_MBkfoVVQiagCbX9oG9mQ_wHdzlUkLsNqQ4wpj8GREDONfUMhuNrdYpMK4rHWY5UW825xXuXAR"/>

                  </MDBCol>
                  <MDBCol lg="6" md="12">

                    <LargeNewsCard title="Finał zbliża się wielkimi krokami..." image="https://www.rutherford.school.nz/wp-content/uploads/2018/05/football.jpg"/>

                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol lg="6" md="12">

                    <LargeNewsCard title="Dodatkowe zadania dla zastępów" image="https://lh3.googleusercontent.com/proxy/l1FuP0-0epyCqndG3n5VM30W7yCVGgleXHVcvld4RFUVcsUjwFzYrOu10OqhmKdO8_bzHHChJMVzfXWNuyBM6j9ScZRleB4xi_1bdH_PFFBWHeqtvC7JJtxAyACM6d_1_w48bQnnxBmyvpa_CbHeSc0"/>

                  </MDBCol>
                  <MDBCol lg="6" md="12">

                    <LargeNewsCard title="Mistrzowie Czerwca!" image="https://media.laczynaspilka.pl/images/pzphp/OGE7MDQsMCwwLGMwOCw4MDU7MDYsMmYxLDFmNiw2/aa888e8ecf0c41bbf12f59c72413b942.jpg"/>

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              </MDBContainer>
            </React.Fragment>
        );
    };
}

export default MainPage;