import React from "react";
import PeopleRelated from "./PeopleRelated";
import LinkedinLearning from "./LinkedinLearning";

class RightSideColumn extends React.Component {
  render() {
    return (
      <div
        style={{ minWidth: "312px", position: "relative", top: "0px" }}
        className="col-12 col-lg-4"
      >
        <PeopleRelated title="People also viewed" arrPosition={25} />
        <PeopleRelated title="People you may know" arrPosition={5} />
        <LinkedinLearning />
      </div>
    );
  }
}

export default RightSideColumn;
