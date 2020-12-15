import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const About = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={4} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
          <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="assets/images/immetrica-logo-1.gif" />
                  <MDBCardBody>
                    <MDBCardTitle>Immetrica INC</MDBCardTitle>
                    <MDBCardText>
                    36 Bellvista Road, unit 16,
                    Brighton, MA 02135, USA
                    </MDBCardText>

                    <MDBBtn color="primary"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href='http://www.linkedin.com/company/immetrica//';
                        }}
                    >LinkedIn</MDBBtn>
                  
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" height="auto" width="100%" alt="Boris" src="assets/images/Boris_Closeup_150x150@72.jpg"  />
                  <MDBCardBody>
                    <MDBCardTitle>Boris Levitan</MDBCardTitle>
                    <MDBCardText>
                      CEO, Systems and Software developer
                    </MDBCardText>
                    <MDBCardText>
                      boris (at) immetrica.com
                    </MDBCardText>
                    <MDBCardText>
                      immetrica (at) gmail.com
                    </MDBCardText>
                    <MDBCardText>
                      Mobile +1 857 891 4000 (preferred)
                    </MDBCardText>
                    <MDBCardText>
                      Skype: live:immetrica, What’sApp, Telegram, Viber: +1 857 891 4000
                    </MDBCardText>
                    <MDBBtn color="primary"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://www.linkedin.com/in/boris-levitan-a8ab6520/';
                        }}
                    >LinkedIn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" height="auto" width="100%" alt="Yuri" src="assets/images/Yuri_Puzzled_sq_tr.png" />
                  <MDBCardBody>
                    <MDBCardTitle>Yuri Degtyarev</MDBCardTitle>
                    <MDBCardText>
                      Sr. Software Engineer
                    </MDBCardText>
                    <MDBCardText>
                    ydegtyarev (at) immetrica.com
                    </MDBCardText>
                    <MDBCardText> 
                    Mobile +1 508 450 1353
                    </MDBCardText>
                    <MDBCardText> 
                    Skype: yura_deg, What’sApp, Telegram: +1 508 450 1353
                    </MDBCardText>

                    <MDBBtn color="primary"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://www.linkedin.com/in/yudegtyarev/';
                        }}
                    >LinkedIn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" height="auto" width="100%" alt="Sasha" src="assets/images/Sasha_150x150@72.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>Aleksandra Rudnitskaya</MDBCardTitle>
                    <MDBCardText>
                      Sr. Software Engineer
                    </MDBCardText>
                    <MDBCardText> 
                    sasha (at) immetrica.com
                    </MDBCardText>
                    <MDBCardText> 
                    Mobile +1 617 447 7021
                    </MDBCardText>
                    <MDBCardText> 
                    Skype: rudikk00, What’sApp, Telegram: +1 617 447 7021
                      </MDBCardText>
                      <MDBBtn color="primary"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://www.linkedin.com/in/aleksandra-rudnitskaya-a4673a37/';
                        }}
                    >LinkedIn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
      <div> 
        <h4>Thirty years of rapid change</h4>
        <p>
        Immetrica, Inc. has been building audience research systems for three decades. We’ve served major television, radio, DBS and DVR players around the world. During this time, television has been changing dramatically:
        </p>
        <ul className="list-unstyled">
          <li style={{listStyleType: "circle"}}>Terrestrial broadcasting has been progressively losing audience to a burgeoning multiplicity of pay-TV-delivered channels, VOD and OTT (“over-the-top”, “third-screen” mobile and Web) services. In a phenomenon with little precedent, several major terrestrial networks have failed or were forced to go dramatically downmarket.
      </li><li style={{listStyleType: "circle"}}> DVR technology rose rapidly but then suddenly reached a plateau, ostensibly in favour of VOD and OTT
      </li><li style={{listStyleType: "circle"}}>The emergence of cord-cutters (especially among younger viewers) who do not use conventional television at all but only OTT
      </li><li style={{listStyleType: "circle"}}>The emergence of near-cord-cutters, people who haven’t “cut the cord” but watch only through DVR, broadband VOD and OTT, thought to remain pay-TV subscribers largely to access sports and premium-channel content not available to nonsubscribers, which is increasingly becoming available on standalone OTT as its producers seek greater monetization
      </li><li style={{listStyleType: "circle"}}>The increasing dominance of U.S. and, to a lesser extent, U.K. content of the multichannel programming in non-English-dominant countries, using price to offset irrelevance
      </li><li style={{listStyleType: "circle"}}>At the same time, RPD audience measurement became possible, offering realistic, sustainable competition to conventional TAM monopolies by offering much larger samples (thus permitting the measurement of smaller channels, and the separate reporting of cobranded feeds and SD v. HD feeds) at a much lower cost
      </li>  
        </ul>
        <h4>Immetrica capabilities</h4>
        <p>We have substantial experience in the technical aspects of audience measurement systems, including a decade of direct participation in the design and development of such systems based on return path data (RPD) and the construction of entire such systems between the data collection and client delivery components.</p>
        <p>Immetrica is the only company that offers such intermediate processing systems independently of the delivery and marketing of the measurement product, providing better quality especially in the RPD settings, transparency of the design, and control by the client, which permits it to give adequate client service and to change delivery-platform and marketing partners at will. Immetrica is also much more affordable than the large TAM providers.</p>
        <p>Immetrica also conducts end-to-end audits of audience measurement systems, both in combination with design and development and as a standalone service.</p>
        <p>We also offer a unique approach to reporting systems, used when the delivery software cannot produce the view or aggregation of the data that clients actually desire. Our rapid-development technology for such systems connects to Web-based, RDBMS and file-based data sources and let users see meaningful analysis earlier than conventional IT practices can deliver a nonfunctioning mockup. These are full-fledged reports, not dashboards. For one client, we produce more than 2000 reports monthly, each estimated to require 80 person-hours if composed manually. Our automated systems do this in two days.</p>
        <p>For 17 years prior to founding Immetrica, the firm’s principal developed downstream processing components and conducted interpretative analysis for one of the largest programme producers and presenters in the U.S., acquiring a client’s view of audience measurement. The firm represents a progression from criticism of the work of syndicated TAM providers to an opportunity to do a better job.</p>
        <h4>Design and development of audience measurement systems</h4>
        <h5>Essential elements</h5>

        <h5>What not to do</h5>
        <h5>Intermediate processing system</h5>
        <h5>Immetrica solves these problems:</h5>
        <ul className="list-unstyled">
          <li style={{listStyleType: "circle"}}>
          Immetrica develops the intermediate processing system with specific attention to the idiosyncrasies of the client’s technological and commercial specifics.
          </li><li style={{listStyleType: "circle"}}>
          The client becomes an owner of the system software
          </li><li style={{listStyleType: "circle"}}>
          Immetrica documents all design and implementation, maintains transparency, and works with client staff to understand the system so that the client could take on as much of the support burden as it wishes.
            </li><li style={{listStyleType: "circle"}}>
            Service to users of the audience-measurement service can be provided by Immetrica, the client, or both
            </li><li style={{listStyleType: "circle"}}>
            Immetrica can operate the system or at any time duly agreed, turn it over to the client.
            </li><li style={{listStyleType: "circle"}}>
            Immetrica can work with any delivery-platform provider to produce the necessary files in the required formats.
            </li><li style={{listStyleType: "circle"}}>
            Immetrica audits the system and prepares it for accreditation or certification, such by as the Ernst & Young practice group that typically conducts accreditation audits for the U.S. Media Rating Council.
            </li>
        </ul>

      </div>

    </MDBContainer>
  );
}

export default About;




// ----------------------------------------------------------------------------
//import React from 'react';

//function About(props) {
//    return (
//      <div className="container">
//        <h4>About page</h4>
//      </div>
//    );
//  }
  
//  export default About;