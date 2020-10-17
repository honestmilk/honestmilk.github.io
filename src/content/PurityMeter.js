import { max } from 'moment';
import React, { Component } from 'react';
import GaugeChart from 'react-gauge-chart';

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

const maxPossible = 700;
const todaysPurityValue = 540;
const percentage = todaysPurityValue / maxPossible;

class PurityMeter extends Component {
  render() {
    return (
      <>
        <section 
          className="section section-lg pt-lg-0 section-contact-us mt-3"
          id="purity-meter"
        >
          <Container>
          <Row className="row-grid align-items-center">
            <Col lg="6">
              
              <div className="d-flex px-3">
                <div>
                  <h4 className="display-3">Today's Purity Meter</h4>
                  <p className="">
                    Today's score <span style={{fontSize: '1.3em'}}>{todaysPurityValue}</span> / 
                    <span style={{fontSize: '1.3em'}}>{maxPossible}</span>
                  </p>
                </div>
              </div>
              <div className="d-flex px-3">
                <GaugeChart id="gauge-chart5"
                  nrOfLevels={420}
                  arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
                  colors={['#EA4228','#d67674', '#F5CD19', 'rgb(14 218 103)', 'rgb(13 72 44)']}
                  percent={percentage}
                  hideText
                  arcPadding={0.02}
                  formatTextValue={(value) => parseInt(value * maxPossible / 100)}
                />
              </div>
            </Col>
            <Col className="ml-lg-auto" lg="6" md="12">
              <Row sm="4" md="4" lg="4" xl="4">
                <Col>
                  <div className="stat-card card-body">
                    Adulterant <br/>
                    <span style={{fontSize: '1.3em'}}>NO</span>
                  </div>                  
                </Col>
                <Col>
                  <div className="stat-card card-body">
                    Acidity <br/>
                    <span style={{fontSize: '1.3em'}}>0.135</span>
                  </div>
                </Col>
                <Col>
                  <div className="stat-card card-body">
                    Grade <br/>
                    <span style={{fontSize: '1.3em'}}>A</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="details">
                    <div className="stats">
                      FAT <br />
                      <span style={{fontSize: '2em'}}>3.8</span> % <br />
                      STANDARD 3.5 %
                    </div>
                    <div>
                      Percent Fat Content - Whole cow milk fat varies between  3.5% - 4.2% depends on feed and weather
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="details">
                    <div className="stats">
                      SNF <br />
                      <span style={{fontSize: '2em'}}>8.3</span> % <br />
                      STANDARD 8.5 %
                    </div>
                    <div>
                      Solid Non Fat is the substances in milk other than fat and water, it include casein, lactose, vitamins and minerals. Standard SNF in cow milk is 8.5%
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="details">
                    <div className="stats">
                      PROTEIN <br />
                      <span style={{fontSize: '2em'}}>3.8</span> % <br />
                      STANDARD 3 %
                    </div>
                    <div>
                      Raw cow milk contains 30 grams of protein per liter
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="details">
                    <div className="stats">
                      SCC <br />
                      <span style={{fontSize: '2em'}}>2.6</span> K/ml <br />
                      STANDARD 300 K/Ml
                    </div>
                    <div>
                      Somatic cell count - SCC is the number of white blood cells found in a milliliter of milk. SCC is a main indicator of milk quality, a lower SCC indicates better animal health","grade":"Grade of the milk determined by methods, based on the somatic cell count and the bacterial count. Generally a lower somatic cell count indicates better animal health, while the lower bacterial count indicates improved equipment sanitation and hygiene at farm.
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="details">
                    <div className="stats">
                      MBRT <br />
                      <span style={{fontSize: '2em'}}>4</span> HOURS <br />
                      STANDARD 3 Hours
                    </div>
                    <div>
                    Methylene Blue Dye Reduction Test, commonly known as MBRT test is used as a quick method to assess the bacterial count in milk. Higher time indicates lower bacterial count in milk
                    </div>
                  </div>
                </Col>
              </Row>
              {/* <div className="d-flex gutter-3">
                <div className="stat-card card-body">
                  Adulterant <br/>
                  <span style={{fontSize: '2em'}}>NO</span>
                </div>
                
                <div className="stat-card card-body">
                  Acidity <br/>
                  <span style={{fontSize: '2em'}}>0.135</span>
                </div>
                
                <div className="stat-card card-body">
                  Grade <br/>
                  <span style={{fontSize: '2em'}}>A</span>
                </div>
              </div> */}
            </Col>
          </Row>
            
          </Container>
        </section>
      </>
    );
  }
}

export default PurityMeter;