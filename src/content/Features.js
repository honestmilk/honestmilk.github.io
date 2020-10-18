
import React from "react";

import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

class Features extends React.Component {
  state = {};
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <section className="section section-lg pt-lg-5" id="features">
          <Container>
            <h1>
              Why Honest Milk?
            </h1>
            <Row className="justify-content-center mt-4">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-5">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-shape icon-shape-primary rounded-circle">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h3 style={{margin: 0, marginLeft: '10px'}} className="text-primary">
                            Quality at its Best
                          </h3>
                        </div>
                        <p className="description">
                          We promise to provide you a glassful of healthy and preservative-free milk. It is important for your toddler to get the best to develop the brain, bones and muscles. Why not get him the best drink right from the start.
                        </p>
                        {/* <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Learn more
                        </Button> */}
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-5">
                        
                        <div className="d-flex align-items-center">
                          <div className="icon icon-shape icon-shape-success rounded-circle">
                            <i className="ni ni-favourite-28" />
                          </div>
                          <h3 style={{margin: 0, marginLeft: '10px'}} className="text-success">
                            No compromise with the milking cycle
                          </h3>
                        </div>
                        <p className="description">
                          Honest Milk is a direction towards the upbringing of milk yield. We monitor the whole process right from the production to the delivery and bring in stringent quality control at each step of the chain. Quality control tests, complying with the global standards are an integral part of our manufacture.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="row-grid">
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-5">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-shape icon-shape-warning rounded-circle">
                            <i className="ni ni-satisfied" />
                          </div>
                          <h3 style={{margin: 0, marginLeft: '10px'}} className="text-warning">
                            Win-win for producers and consumers
                          </h3>
                        </div>
                          <p className="description">
                            At Honest Milk, the cows are given the best diet and barred of any form of hormonal injections to enhance the milk yield. This even intensifies the health of children and adults as they get the unprocessed raw milk, which is tested daily and delivered within hours of being milked.
                          </p>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" style={{display: 'flex', flexDirection: 'column'}}>
                    <Card className="feature-card shadow border-0" style={{flexGrow: 1}}>
                      <CardBody className="py-5">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-shape icon-shape-default rounded-circle">
                            <i className="ni ni-planet" />
                          </div>
                          <h3 style={{margin: 0, marginLeft: '10px'}} className="text-default">
                            Environment Friendly
                          </h3>
                          </div>
                        <p className="description">
                        With the plastic being accumulated at the highest level in the strata of environment today, we choose one of the safest materials for packaging – Glass. Unlike plastic, which is toxic and can leech into our food-chain, Glass is non-reactive and environmental-friendly too.
                        </p>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      
      </>
    );
  }
}

export default Features;

