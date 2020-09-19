import React, { Component } from "react";
import {MDBCard} from "mdbreact";
import Planets from "../api/hookstest.js"

class HistoryPage extends Component {
    render() {
        return(
            <div style={{ marginTop: '100px' }}>
                history page <br/>

                <Planets />
            </div>
        );
    }
}

export default HistoryPage;