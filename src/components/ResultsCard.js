import React, { Component } from 'react';
import { MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBCard, MDBBtn, MDBRow, MDBTable, MDBTableBody, MDBContainer, MDBListGroup, MDBListGroupItem, MDBBadge, MDBTypography, MDBBox} from 'mdbreact';
import gold_cup from "./png/004-gold-cup.png"
import silver_cup from "./png/005-silver-cup.png"
import bronze_cup from "./png/006-bronze-cup.png"

class ResultsCard extends Component {
  render() {
    return(
      <MDBContainer style={{ marginTop: '100px'}}>
      <MDBCol>
      <MDBCard style={{ 
                        background: "url(https://mdbootstrap.com/img/Photos/Others/background3.jpg)",
                      }}>
        <MDBCardBody>
          <MDBCardTitle className="text-center">Wyniki rywalizacji zastępów</MDBCardTitle>
             <MDBRow>
                <MDBCol lg="6" md="12">
                <MDBContainer>
                      <MDBRow>
                        <MDBCol size='4' className="border border-dark">
                      <img src={gold_cup} className="img-fluid z-depth-1 rounded-circle" alt="" />
                      </MDBCol>
                      <MDBCol size='8' className="border border-dark">
                        <MDBBox display="flex" justifyContent="center" >
                            1 MIEJSCE
                        </MDBBox>
                      </MDBCol>
                      </MDBRow>

                      <MDBRow>
                      <MDBCol size='4' className="border border-dark">
                      <img src={silver_cup} className="img-fluid z-depth-1 rounded-circle" alt="" />
                      </MDBCol>
                      <MDBCol size='8' className="border border-dark">
                        <MDBBox display="flex" justifyContent="center" >
                            2 MIEJSCE
                        </MDBBox>
                      </MDBCol>
                      </MDBRow>
                
                      <MDBRow>
                      <MDBCol size='4' className="border border-dark">
                      <img src={bronze_cup} className="img-fluid z-depth-1 rounded-circle" alt="" />
                      </MDBCol>
                      <MDBCol size='8' className="border border-dark">
                        <MDBBox display="flex" justifyContent="center" >
                            3 MIEJSCE
                        </MDBBox>
                      </MDBCol>
                      </MDBRow>
                
                
                    
                </MDBContainer>
                </MDBCol>
                <MDBCol lg="6" md="12">
                
    <MDBTable bordered>
      <MDBTableBody>
        <tr>
          <td>4</td>
          <td>PANDY</td>
          <td>123</td>
        </tr>
        <tr>
          <td>5</td>
          <td>RYSIE</td>
          <td>104</td>
        </tr>
        <tr>
          <td>6</td>
          <td>OWOCKI</td>
          <td>99</td>
        </tr>
        <tr>
          <td>7</td>
          <td>SOKOŁY</td>
          <td>86</td>
        </tr>
        <tr>
          <td>8</td>
          <td>TUKANY</td>
          <td>54</td>
        </tr>
        <tr>
          <td>9</td>
          <td>DZIKI</td>
          <td>32</td>
        </tr>
        <tr>
          <td>10</td>
          <td>PAPUGI</td>
          <td>2</td>
        </tr>
      </MDBTableBody>
    </MDBTable>

                </MDBCol>
             </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </MDBContainer>
    );
  }
}

export default ResultsCard;

