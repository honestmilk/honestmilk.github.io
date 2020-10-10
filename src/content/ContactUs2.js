
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button
} from "reactstrap";

// import Datepicker from "./IndexSections/Datepicker.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
  }
  render() {
    return (
      <>
        <section className="section pb-0 bg-gradient-primary pb-6" id="contact-us">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <div className="position-relative pl-md-5 ">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("../assets/img/ill/4022195.svg")}
                    />
                  </div>
                </Col>
                <Col className="ml-lg-auto" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-chat-round text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Contact Us</h4>
                      <p className="text-white">
                        We would love to hear from you. <br />
                        We value your feedback.
                      </p>
                    </div>
                  </div>
                  <div>
                  <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-circle-08" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={e => this.setState({ nameFocused: true })}
                            onBlur={e => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: this.state.emailFocused
                    })}
                  >
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Phone Number"
                        type="number"
                        onFocus={e => this.setState({ emailFocused: true })}
                        onBlur={e => this.setState({ emailFocused: false })}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="name"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      size="lg"
                      type="button"
                    >
                      Send Message
                    </Button>
                  </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
      </>
    );
  }
}

export default Landing;
