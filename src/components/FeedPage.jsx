import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/FeedPage.css";

class FeedPage extends React.Component {
  state = {
    postArray: [],
  };

  render() {
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Row id="hopesAndDreams">
          <Col md={2}></Col>
          <Col md={6} id="feedMiddleColumn">
            <Row
              id="posterBit"
              style={{ width: "112%", marginLeft: "-5%" }}
            ></Row>

            <Row className="d-flex justify-content-center"></Row>
          </Col>
          <Col md={3} id="feedRightColumn"></Col>
        </Row>
        <hr />
      </Container>
    );
  }
}

export default FeedPage;
