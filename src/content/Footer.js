
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-top mb-5 justify-content-md-between">
              
              <Col lg="6">
                <h2 className=" text-primary font-weight-light mb-2">
                  Honest Milk
                </h2>
                <h6 className=" mb-0 font-weight-light">
                  With ‘Honest Milk’, we aspire to serve these standard quality products to the larger section of household. In future, we look forward to serve you with a variety of dairy products at your table. 
                </h6>
              </Col>
              <Col id="footer-details" className="btn-wrapper" lg="6">
                <div>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="dribbble"
                    href="https://www.instagram.com/"
                    id="tooltip829810202"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-instagram" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip829810202">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon-only rounded-circle"
                    color="twitter"
                    href="https://twitter.com/"
                    id="tooltip475038074"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-twitter" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip475038074">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon-only rounded-circle ml-1"
                    color="facebook"
                    href="https://www.facebook.com/"
                    id="tooltip837440414"
                    target="_blank"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-facebook-square" />
                    </span>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip837440414">
                    Like us
                  </UncontrolledTooltip>
                </div>
                <div className="text-lg-right mt-3">
                  <table 
                    style={{
                      textAlign: "left"
                    }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div className="icon icon-lg icon-shape text-primary">
                            <i className="ni ni-building"></i>
                          </div>
                        </td>
                        <td>
                          Nanak Dairy Farms Gurgaon
                          <br/>
                          Faridabad Road, Baliawas, 
                          <br />
                          Gurgaon, Haryana- 122005
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icon icon-lg icon-shape text-primary">
                            <i className="fa fa-phone"></i>
                          </div>
                        </td>
                        <td>
                          +91 987 654 3210
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="icon icon-lg icon-shape text-primary">
                            <i className="ni ni-email-83"></i>
                          </div>
                        </td>
                        <td>
                          support@honestmilk.in
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="/"
                  >
                    Honest Milk
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="/"
                    >
                      Honest Milk
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#about-us"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#blog"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
