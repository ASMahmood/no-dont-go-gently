import React from "react";
import { Container, Row } from "react-bootstrap";
import RightSideColumn from "./RightSideColumn";
import ProfileLeft from "./ProfileLeft";

const ProfilePage = () => {
  return (
    <>
      <Container style={{ marginTop: "4rem" }}>
        <Row>
          <ProfileLeft />
          <RightSideColumn />
        </Row>
        <hr />
      </Container>
    </>
  );
};

export default ProfilePage;
