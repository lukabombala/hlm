import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow , MDBCard, MDBCardBody, MDBMask, MDBView, MDBIcon} from "mdbreact";
import LargeNewsCard from "../../LargeNewsCard.js";
import SmallNewsCard from "../../SmallNewsCard.js";
import Pagination from "./Pagination.js";

class MainPage extends Component {
    render() {
        return(
            <React.Fragment>
              <MDBContainer>
                
              <hr className="my-5"/>
              <h2 className="h1 text-center my-5 font-weight-bold">Aktualności</h2>
               <MDBContainer style={{ marginTop: '20px' }}
               >
                <MDBRow>
                  <MDBCol lg="6" md="12">
              
                    <LargeNewsCard title="Koniec sezonu HLM" 
                                   image="https://www.tropiciele.net.pl/wp-content/uploads/ngg_featured/mg7_8400.jpg" 
                                   category="Ważne informacje"
                                   icon="exclamation"
                                   dateadd="8/09/2020"
                                   />

                  </MDBCol>
                  <MDBCol lg="6" md="12">

                    <LargeNewsCard title="Finał zbliża się wielkimi krokami..." 
                                   image="https://www.rutherford.school.nz/wp-content/uploads/2018/05/football.jpg"
                                   icon="exclamation"
                                   category="Ważne informacje"
                                   dateadd="25/08/2020"
                                   />

                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol lg="6" md="12">

                    <LargeNewsCard title="Dodatkowe zadania dla zastępów" 
                                   image="https://wsensie.pl/images/male/m_las_forest.jpg"
                                   category="Zadanie dodatkowe"
                                   icon="tasks"
                                   dateadd="13/06/2020"
                                   />

                  </MDBCol>
                  <MDBCol lg="6" md="12">

                    <LargeNewsCard title="Mistrzowie Maja!" 
                                   image="https://ocdn.eu/pulscms-transforms/1/nmWk9kpTURBXy9hNDdkODY5MTQxMjk2NjczYWVlZmRmZTJiMTgzNjhhMi5qcGeTlQMAzJTNEpDNCnGTBc0DFM0BvJMJpjFhYmNmYgaBoTAB/krzywy-las-kolo-gryfina.jpg"
                                   category="Blog"
                                   icon="book-reader"
                                   dateadd="2/06/2020"
                                   />

                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              <Pagination/>
              </MDBContainer>
            </React.Fragment>
        );
    };
}

export default MainPage;