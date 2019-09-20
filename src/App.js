import React, { Fragment } from "react";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>Welcome to Bugsweeper</h1>
      <div className="info">
        <h2>There are 15 bugs. Find them all!</h2>
      </div>
      <div className="info">
        <a href=".">New Game</a>
      </div>
      <Map />
    </Fragment>
  );
}

export default App;
