import React, { Component } from 'react';
import { MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBCard, MDBBtn, MDBRow, MDBTable, MDBTableBody, MDBContainer, MDBListGroup, MDBListGroupItem, MDBBadge, MDBTypography} from 'mdbreact';

class ResultsCard extends Component {
  render() {
    return(
      <MDBCol>
      <MDBCard style={{ 
                        background: "url(https://mdbootstrap.com/img/Photos/Others/background3.jpg)",
                      }}>
        <MDBCardBody>
          <MDBCardTitle className="text-center">Wyniki rywalizacji zastępów</MDBCardTitle>
             <MDBRow>
                <MDBCol lg="6" md="12">
                <MDBContainer>
                
                  <div className="border border-dark">
                    1 miejsce
                  </div>
                  <div className="border border-dark">
                    2 miejsce
                  </div>
                  <div className="border border-dark">
                    3 miejsce
                  </div>
                    
                    
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
    );
  }
}

export default ResultsCard;

