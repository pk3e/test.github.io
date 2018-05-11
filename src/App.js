import React, { Component } from "react";
import "./App.css";
import Top from "./components/top";
import GuttersGrid from "./components/content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <GuttersGrid />
      </div>
    );
  }
}

export default App;
