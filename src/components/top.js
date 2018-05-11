import React, { Component } from "react";
import MultipleSelect from "./select";
class Top extends Component {
  render() {
    return (
      <div>
        <MultipleSelect type="style" names={["Lifestyle", "Walk", "Golf"]} />
        <MultipleSelect type="color" names={["white", "grey", "black"]} />
      </div>
    );
  }
}

export default Top