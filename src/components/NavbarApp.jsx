import React from "react";
import "../styles/Navbar.css";
import { Container, Dropdown, Button } from "react-bootstrap";
import { withRouter, NavLink, Link } from "react-router-dom";
import abdul from "../components/abdul.jpeg";

import {
  AiFillLinkedin,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { GrSchedulePlay } from "react-icons/gr";

class Navbar extends React.Component {
  state = {
    user: "",
  };

  render() {
    return (
      <Container fluid className="main-container">
        <div className="header container-lg">
          <div className="navbar-left">
            <Link to="/" className="Linkedin-icon">
              <AiFillLinkedin />
            </Link>

            <div className="search-input">
              <AiOutlineSearch />
              <input type="text" placeholder="search" />
            </div>
          </div>

          <div className="navbar-right">
            <NavLink to="/" activeClassName="active-link">
              <div
                className="navbar-home mx-3 text-center"
                onClick={() => this.props.history.push("/")}
              >
                <AiFillHome className="icon" style={{ marginTop: "0.5rem" }} />
                <h5
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: 1,
                    marginTop: 2,
                    textDecoration: "none",
                  }}
                >
                  Home
                </h5>
              </div>
            </NavLink>

            <div className="navbar-network mx-3 text-center">
              <BsFillPeopleFill className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Network
              </h5>
            </div>
            <div className="navbar-work mx-3 text-center">
              <IoBagRemove className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Work
              </h5>
            </div>
            <div className="navbar-msg mx-3 text-center">
              <AiFillMessage className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Messagges
              </h5>
            </div>
            <div className="navbar-notifications mx-3 text-center">
              <IoMdNotifications className="icon" />
              <h5
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  marginTop: 4,
                  fontWeight: 400,
                }}
              >
                Notifications
              </h5>
            </div>
            <div className="navbar-profile-menu mx-3 text-center">
              <img
                src={this.state.user.image ? this.state.user.image : abdul}
                alt=""
              />
              <Dropdown alignRight>
                <Dropdown.Toggle id="dropdown-menu-align-right" title="Me">
                  Me
                </Dropdown.Toggle>
                <Dropdown.Menu id="meMenu" style={{ minWidth: "300px" }}>
                  {this.state.user ? (
                    <>
                      <Dropdown.Item
                        eventKey="1"
                        style={{ padding: "4px 12px" }}
                      >
                        <div className="d-flex">
                          <img
                            src={this.state.user.image}
                            alt=""
                            width="56px"
                            height="56px"
                          />

                          <div className="pl-1 d-flex flex-column justify-content-center">
                            <h6>
                              {this.state.user.name +
                                " " +
                                this.state.user.surname}
                            </h6>
                            <h6>{this.state.user.title}</h6>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item eventKey="1">Image</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Full Name</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Job Title</Dropdown.Item>
                    </>
                  )}

                  <Dropdown.Item eventKey="4">
                    <Button
                      id="profileButton"
                      onClick={() => this.props.history.push("/me")}
                    >
                      View Profile
                    </Button>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Account</Dropdown.Header>
                  <Dropdown.Item eventKey="5">Access My Premium</Dropdown.Item>
                  <Dropdown.Item eventKey="6">Settings & Privacy</Dropdown.Item>
                  <Dropdown.Item eventKey="7">Help</Dropdown.Item>
                  <Dropdown.Item eventKey="8">Language</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Manage</Dropdown.Header>
                  <Dropdown.Item eventKey="9">Posts & Activity</Dropdown.Item>
                  <Dropdown.Item eventKey="10">
                    Job Posting Account
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="11">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="side-menu mx-4">
              <div className="courses-menu text-center">
                <GrSchedulePlay className="icon" />
                <h5
                  style={{
                    fontSize: 10,
                    letterSpacing: 1,
                    marginTop: 4,
                    fontWeight: 400,
                  }}
                >
                  Courses
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Navbar);
