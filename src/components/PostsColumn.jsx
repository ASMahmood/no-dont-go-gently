import React from "react";
import IndividualPost from "./IndividualPost";
import { Button, Spinner, Alert } from "react-bootstrap";

class PostsColumn extends React.Component {
  render() {
    return (
      <>
        {this.props.posts.map((singlePost, index) => (
          <IndividualPost
            user={this.props.user}
            post={singlePost}
            key={index}
            peepo={this.props.addToBlacklist}
            addToSaved={this.props.addToSaved}
            profiles={this.props.profiles}
            fetchPosts={this.props.fetchPosts}
          />
        ))}
      </>
    );
  }
}

export default PostsColumn;
