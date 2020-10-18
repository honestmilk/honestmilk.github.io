import React from "react";
import Logo from "../assets/img/brand/Logo.png";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <section className="section pt-8" id="about-us" style={{backgroundColor: 'rgb(113, 113, 113)'}}>
          <Container>
            <div className="">
              <div className="px-4">
                <Row className="justify-content-center">
                  <Col>
                    <div 
                      className="card-profile-image text-center" 
                      style={{
                        marginTop: "-100px"
                      }}
                    >
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={Logo}
                        style={{
                          height: 200
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-2">
                  <h1 className="text-white">
                    About Us
                  </h1>
                </div>
                <div className="mt-2 pt-2 pb-4">
                  <Row className="justify-content-center">
                    <Col>
                      <p style={{fontSize: 20, color: 'white'}}>
                        Purity and cleanliness is what consumers look forward to in everything today. With ‘Honest Milk’, we not only tend to provide you the best offering but also guarantee you safety and world-class milk. We bring to you the promise of sanctity, the unmatched food-value and the dosage of unadulterated nutritional value. <br />
                        India is the richest producer of most commonly used commodity - Milk, the godsend gift. But with the rapid growth of digitalisation of all goods in today’s centaury, the idea of services and sale has lost the touch of love. Even the quality has been brought to compromise. But worry not. With Honest Milk, we intend to reconnect with the nature and serve to you the absolute goodness at your homes.
                      </p>
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                        Show more
                      </a> */}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Profile;
