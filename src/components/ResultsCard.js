import React, { Component } from 'react';
import { MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBCard, MDBBtn, MDBRow, MDBTable, MDBTableBody, MDBContainer, MDBListGroup, MDBListGroupItem, MDBBadge, MDBTypography, MDBBox} from 'mdbreact';
import gold_cup from "./png/004-gold-cup.png"
import silver_cup from "./png/005-silver-cup.png"
import bronze_cup from "./png/006-bronze-cup.png"

class ResultsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }
  
  componentDidMount() {
    fetch("https://lukabombala.pythonanywhere.com/hlm/results?format=json")
    .then(response => response.json())
    .then(data => this.setState({ results: data.results }))
  }

  render() {
    const last = this.state.results.slice(3);
    const first= this.state.results.slice(0,3);

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
                  {first.map((troop) => {
                    return (
                      <MDBRow key={troop.id}>
                        <MDBCol size='4' className="border border-dark">
                            {troop.place==1 && <img src={gold_cup} className="img-fluid z-depth-1 rounded-circle" alt="" />}
                            {troop.place==2 && <img src={bronze_cup} className="img-fluid z-depth-1 rounded-circle" alt="" />}
                            {troop.place==3 && <img src={silver_cup} className="img-fluid z-depth-1 rounded-circle" alt="" />}
                        </MDBCol>
                        <MDBCol size='8' className="border border-dark">
                          <MDBBox display="flex" justifyContent="center" >
                              {troop.troop_name}
                          </MDBBox>
                        </MDBCol>
                      </MDBRow>
                    );
                  })}
                </MDBContainer>
                </MDBCol>
                <MDBCol lg="6" md="12">
                
    <MDBTable bordered striped>
      <MDBTableBody>
        {last.map((troop) => {
          return (
            <tr key={troop.id}>
              <td>{troop.place}</td>
              <td>{troop.troop_name}</td>
              <td>{troop.points}</td>
              <td>{troop.rev_points}</td>
            </tr>
          );
        })}
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

