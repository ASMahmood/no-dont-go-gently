import React from "react";
import { Container, Row } from "react-bootstrap";
import RightSideColumn from "./RightSideColumn";

const ProfilePage = () => {
  return (
    <>
      <Container style={{ marginTop: "4rem" }}>
        <Row>
          <RightSideColumn />
        </Row>
        <hr />
      </Container>
    </>
  );
};

export default ProfilePage;
