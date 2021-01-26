import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiFillPlaySquare } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Modal, Button, Form } from "react-bootstrap";

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

  submitPost = async (e) => {
    e.preventDefault();
    console.log(this.state.image);
    try {
      const response = await fetch("https://buildweek-3.herokuapp.com/post", {
        method: "POST",
        body: JSON.stringify(this.state.post),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });

      if (response.ok && this.state.image) {
        let hope = await response.json();
        await this.postImage(hope._id);
      } else if (response.ok) {
        alert("Post sent !");
        this.setState({
          post: { text: "" },
          image: null,
          errMessage: "",
        });
        this.props.fetchPosts();
        this.handleClose();
      } else {
        console.log("an error occurred");
        let error = await response.json();
        this.setState({
          errMessage: error.message,
        });
      }
    } catch (e) {
      console.log(e); // Error
      this.setState({
        errMessage: e.message,
        loading: false,
      });
    }
  };

  postImage = async (postId) => {
    try {
      let post = new FormData();
      await post.append("post", this.state.image);
      if (post) {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/posts/" + postId,
          {
            method: "POST",
            body: post,
            headers: new Headers({
              Authorization: `Bearer ${process.env.REACT_APP_BE_URL}`,
              Accept: "application/json",
            }),
          }
        );
        if (response.ok) {
          alert("Post sent with image !");
          this.setState({
            post: { text: "" },
            image: null,
            errMessage: "",
          });
          this.props.fetchPosts();
          this.handleClose();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="d-flex align-items-center">
          <BsPencilSquare className="mr-3" />
          <Form.Control
            as="textarea"
            size="lg"
            type="text"
            placeholder="Start a post"
          />
        </div>
      </>
    );
  }
}

export default StartPost;
