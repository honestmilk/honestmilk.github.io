import React from "react";
// reactstrap components
import { UncontrolledCollapse, Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

class Profile extends React.Component {
  render() {
    return (
      <>
        <section className="section pt-8" id="faq">
          <Container>
            <Row>
              <Col>
                <h1>FAQ</h1>
                <ListGroup>
                  <ListGroupItem>
                    <ListGroupItemHeading id="faq-1" className="toggler">
                      List group item heading
                    </ListGroupItemHeading>
                    <UncontrolledCollapse toggler="#faq-1">
                      <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </UncontrolledCollapse>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading id="faq-2" className="toggler">List group item heading</ListGroupItemHeading>
                    <UncontrolledCollapse toggler="#faq-2">
                    <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    </ListGroupItemText>
                    </UncontrolledCollapse>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading id="faq-3" className="toggler">List group item heading</ListGroupItemHeading>
                    <UncontrolledCollapse toggler="#faq-3">
                      <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                      </ListGroupItemText>
                    </UncontrolledCollapse>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Profile;
