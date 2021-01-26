import React from "react";
import { Container } from "react-bootstrap";
import "../styles/CreateFeed.css";
import { CgFeed } from "react-icons/cg";
import {
  AiFillPicture,
  AiFillYoutube,
  AiTwotoneCalendar,
} from "react-icons/ai";

class CreateFeed extends React.Component {
  render() {
    return (
      <div className="create-feed">
        <Container className="feed-wrapper">
          <div className="feed-icons-wrapper mt-3">
            <div className="pic-icon d-flex text-center">
              <AiFillPicture />
              <p className="text-dark my-auto ml-1">Picture</p>
            </div>
            <div className="vid-icon d-flex text-center">
              <AiFillYoutube />
              <p className="text-dark my-auto ml-1">Video</p>
            </div>
            <div className="event-icon d-flex text-center">
              <AiTwotoneCalendar />
              <p className="text-dark my-auto ml-1">Event</p>
            </div>
            <div className="article-icon d-flex text-center">
              <CgFeed />
              <p className="text-dark my-auto ml-1">Write an article</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CreateFeed;
