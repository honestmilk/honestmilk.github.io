import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <section className="section mt-8" id="about-us">
          <Container>
            <Card className="card-profile shadow">
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
                        src={require("assets/img/brand/Logo.png")}
                        style={{
                          height: 200
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-2">
                  <h3>
                    About Us
                  </h3>
                </div>
                <div className="mt-2 pt-2 pb-4 border-top">
                  <Row className="justify-content-center">
                    <Col lg="9">
                      <p>
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
            </Card>
          </Container>
        </section>
      </>
    );
  }
}

export default Profile;
