import React, { Component } from "react";
import Body from "../../Body.js"
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import TeamCard from "./TeamCard.js";

class TroopsPage extends Component {
    render() {
        return(
            <div>
                <CardExample/>
            </div>
        );
    }
}


const CardExample = () => {
  return (
    <MDBContainer>
    <MDBCardGroup>
    <MDBRow>
        <MDBCol lg="6" md="6">
      <TeamCard name="1"/>
      </MDBCol>
      <MDBCol lg="6" md="6">
      <TeamCard name="2"/>
    </MDBCol>
      </MDBRow>
    <MDBRow>
    <MDBCol lg="6" md="6">
    <TeamCard name="3"/>
</MDBCol>
<MDBCol lg="6" md="6">
<TeamCard name="4"/>
     
      </MDBCol>
      </MDBRow>
    </MDBCardGroup>
    </MDBContainer>
  );
}

export default TroopsPage;