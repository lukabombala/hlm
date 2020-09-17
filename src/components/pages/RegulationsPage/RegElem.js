import React, { Component } from "react";
import {MDBTypography, MDBBtn, MDBCollapse, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBIcon} from "mdbreact";

class RegElem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
            title: props.title,
            description: props.description,
            confirmation: props.confirmation,
            terms: props.terms,
        };
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    }

    render() {
        return(
            <React.Fragment>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>
                            
                <div className="border border-dark"
      onClick={this.toggleCollapse("basicCollapse")}
      
    >
        <li>
      {this.state.title}
    
    <MDBIcon className="float-right"
                icon={this.state.collapseID === 'basicCollapse' ? 'angle-up' : 'angle-down'}
              />
              </li>
              </div>
              
    </MDBCardTitle>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
        
                    <MDBCardText>
                        {this.state.description}<br/><br/>
                        </MDBCardText>

                    { this.state.confirmation &&
                        <MDBTypography note noteColor="warning" noteTitle="Potwierdzenie: ">
                            {this.state.confirmation}
                        </MDBTypography>
                    }
                    { this.state.terms &&
                        <MDBTypography note noteColor="info" noteTitle="Warunki: ">
                            {this.state.terms}
                        </MDBTypography>
                    }
        </MDBCollapse>
        </MDBCardBody>            
        </MDBCard>    
            </React.Fragment>
        );
    }
    
}

export default RegElem;

