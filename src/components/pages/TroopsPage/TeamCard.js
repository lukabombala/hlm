import React, { Component } from "react";
import {MDBCard, MDBCardTitle, MDBContainer, MDBListGroup, MDBListGroupItem, MDBBadge} from "mdbreact";

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: props.team,
            troops: props.troops,
            results: props.results
        };
    }

    render() {
        const troops = this.state.troops;
        const results = this.state.results;
        
        return(
            <MDBContainer>
                <MDBCard className="card-body" style={{ width: "30rem", 
                                                        marginTop: "1rem",
                                                        height:  "22rem" }}>

                        <MDBCardTitle tag="h5">{this.state.team.team_name}</MDBCardTitle>
                        Zastępy:
                        <MDBContainer>
                            <MDBListGroup>
                                
                                    {troops.map((troop) => {
                                        return (  
                                            <MDBListGroupItem className="d-flex justify-content-between align-items-center" key={troop.id}>
                                                {troop.troop_name}
                                                <MDBBadge color="primary" pill>{console.log(results.filter(result => result.id===5))}</MDBBadge>
                                            </MDBListGroupItem>
                                        );
                                    })}
                                
                            </MDBListGroup>
                        </MDBContainer>
                </MDBCard>
            </MDBContainer>

        );
    }
}
export default TeamCard;