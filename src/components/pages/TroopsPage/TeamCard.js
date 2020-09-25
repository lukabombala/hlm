import React, { Component } from "react";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: props.team,
            troops: props.troops
        };
    }

    render() {
        const troops = this.state.troops;
        console.log(troops);
        return(
            <MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">{this.state.team.team_name}</MDBCardTitle>
                        Zastępy:
                            <ul>
                                {troops.map((troop) => {
                                    return (  
                                        <li key={troop.id}>
                                            {troop.troop_name}
                                        </li>
                                    );
                                })}
                            </ul>
                        
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

        );
    }
}
export default TeamCard;