import React, { Component } from "react";
import {MDBContainer} from "mdbreact";
import Test from "../../api/Test.js";

class ArchivePage extends Component {
    render() {
        return(
            <MDBContainer style={{ marginTop: '100px' }}>
                <Test/>
            </MDBContainer>
        );
    }
}


export default ArchivePage;