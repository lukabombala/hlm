import React, { Component } from "react";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow, MDBCol} from "mdbreact";

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return(
            <MDBContainer>
                <MDBCard>
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" 
                                alt="MDBCard image cap" 
                                top 
                                hover
                                overlay="white-slight" 
                                className="img-fluid z-depth-1" />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">{this.state.name}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn color="primary" size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>

        );
    }
}
export default TeamCard;