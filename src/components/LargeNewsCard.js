import React, { Component } from "react";
import { MDBMask, MDBView, MDBIcon} from "mdbreact";

class LargeNewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            image: this.props.image,
            icon: this.props.icon,
            category: this.props.category,
            dateadd: this.props.dateadd,
            shortdescription: this.props.shortdescription,
        };
    }

    render() {
        return(
            <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}
                 className=""
              >
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src={this.state.image}
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="light-blue-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon={this.state.icon} className="pr-2" />
                      {this.state.category}
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    {this.state.dateadd}
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">{this.state.title}</a>
                </h3>
                <p className="dark-grey-text">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est, omnis dolor
                  repellendus.
                </p>
                
            </div>
        );
    }
}



export default LargeNewsCard;