
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import contactUs from "../assets/img/ill/contact.svg";
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

import apis from '../apis';

// import Datepicker from "./IndexSections/Datepicker.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submit = (e) => {
    console.log( this.state)
    apis.addQuery(this.state)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
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
                      src={contactUs}
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
                            name="name"
                            onChange={this.onChange}
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
                        name="phone"
                        onFocus={e => this.setState({ emailFocused: true })}
                        onBlur={e => this.setState({ emailFocused: false })}
                        onChange={this.onChange}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      cols="80"
                      name="message"
                      placeholder="Type a message..."
                      rows="4"
                      type="textarea"
                      onChange={this.onChange}
                    />
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      style={{backgroundColor: 'rgb(149, 224, 199)', border: 0}}
                      size="lg"
                      type="button"
                      onClick={this.submit}
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
