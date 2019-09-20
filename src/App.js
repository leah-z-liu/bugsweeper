import React, { Fragment } from "react";
import Map from "./components/Map";
import "./App.css";

function App() {
  return (
    <Fragment>
      <h1>Welcome to Bugsweeper</h1>
      <div class="btn">
        <a href=".">Start again!</a>
      </div>
      <Map />
    </Fragment>
  );
}

export default App;
