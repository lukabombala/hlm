import React, { Component } from "react";
import Body from "../../Body.js"
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import TeamCard from "./TeamCard.js";

class TroopsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          troops: [],
          teams: [],
          results: [],
      };
    }

    componentDidMount() {
      fetch("https://lukabombala.pythonanywhere.com/hlm/troops?format=json")
      .then(response => response.json())
      .then(data => this.setState({ troops: data.results }))

      fetch("https://lukabombala.pythonanywhere.com/hlm/teams?format=json")
      .then(response => response.json())
      .then(data => this.setState({ teams: data.results }))

      fetch("https://lukabombala.pythonanywhere.com/hlm/results?format=json")
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }))
    }

    render() {
        const troops=this.state.troops;
        const teams=this.state.teams;

        return(
            <div>
                <MDBContainer style={{ marginTop: '100px' }}>
                  <MDBCardGroup>
                    <MDBRow>
                    {teams.map((team) => {
                      return (
                      <MDBCol lg="6" md="6">
                        <TeamCard key={team.id} team={team} troops={troops.filter(troop => troop.troop_team==team.id)}/>
                      </MDBCol>
                      );
                    })}
                    </MDBRow>
                  </MDBCardGroup>
                </MDBContainer>
            </div>
        );
    }
}

export default TroopsPage;