import React from "react";
import { BsPencilSquare } from "react-icons/bs";

import { Form } from "react-bootstrap";

import "../styles/StartPost.css";

class StartPost extends React.Component {
  state = {
    post: { text: "" },
    image: null,
    errMessage: "",
  };

  updatePostField = (e) => {
    let Post = { ...this.state.post };
    let textPost = Post.text;

    textPost = e.currentTarget.value;
    Post.text = textPost;
    this.setState({ post: Post });
  };

  render() {
    return (
      <>
        <Form.Group className="d-flex align-items-center">
          <Form.Label>
            <BsPencilSquare className="mr-3" />
          </Form.Label>
          <Form.Control as="textarea" size="lg" placeholder="Start a post" />
        </Form.Group>
      </>
    );
  }
}

export default StartPost;
