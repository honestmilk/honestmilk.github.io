
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import ReactDatetime from "react-datetime";
import farmSVG from "../assets/img/ill/farm.svg";

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
import farm from '../assets/img/ill/farm.jpg';

class Landing extends React.Component {
  state = {};
  componentDidMount() {
  }
  render() {
    return (
      <>
        <section 
          className="section pb-0 pb-6" 
          id="book-visit"
          style={{
            backgroundImage: `url(${farmSVG})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5 ">
                    {/* <img
                      alt="..."
                      className="img-center img-fluid"
                      src={farmSVG}
                    /> */}
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-warning" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white text-bold text-shadow">Book A Farm Visit</h4>
                      <p className="text-white text-bold text-shadow">
                        Visit our farm where you can get a closer look at our testing laboratory. <br />
                        See how we deliver quality we promise.
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
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-calendar-grid-58" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Pick a date"
                        }}
                        timeFormat={false}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div>
                    <Button
                      block
                      className="btn-round"
                      color="default"
                      size="lg"
                      type="button"
                    >
                      Book Visit
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
