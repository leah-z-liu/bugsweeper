import React, { Component } from "react";

import bugImg from "../img/bug.svg";
import flagImg from "../img/face.svg";

let isFinished = false;

export default class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      flag: ""
    };
  }

  flagHandler = evt => {
    evt.preventDefault();
    if (!this.state.clicked) {
      if (this.state.flag) {
        this.setState({
          flag: ""
        });
      } else {
        this.setState({
          flag: true
        });
      }
    }
  };

  clickHandler = evt => {
    let { handleClicks, value } = this.props;
    if (!this.state.flag) {
      this.setState({
        clicked: true
      });
    }
    if (!this.state.clicked) {
      handleClicks();
    }

    if (!isFinished) {
      if (value === "bug" && !this.state.flag) {
        endGame(evt.target);
      }
    }
  };

  render() {
    // deconstruct
    let { row, column, value } = this.props;
    let { clicked, flag } = this.state;

    // add different class names based on different status
    const isBug = value === "bug" ? "isBug" : "";
    const isClicked = clicked ? "clicked" : "";
    const classes = `cell ${isClicked} ${isBug}`;

    return (
      <td
        id={`${row}_${column}`}
        className={classes}
        onClick={this.clickHandler}
        onContextMenu={this.flagHandler}
      >
        {clicked && !flag && value === "bug" ? (
          <img src={bugImg} alt=""></img>
        ) : clicked && !flag && value !== "bug" ? (
          value
        ) : (
          ""
        )}

        {flag && <img src={flagImg} alt=""></img>}
      </td>
    );
  }
}

// function clickArea(target, row, column) {
//   target.id = `${row}_${column}_`;
//   const rows = [row - 1, row, row + 1];
//   const cols = [column - 1, column, column + 1];
//   for (let i of rows) {
//     for (let j of cols) {
//       setImmediate(() => {
//         if (document.getElementById(`${i}_${j}`))
//           document.getElementById(`${i}_${j}`).click();
//       });
//     }
//   }
// }

function endGame(target) {
  isFinished = true;
  alert("Game over!");
  target.style.backgroundColor = "black";
  let cols = target.parentElement.children.length;
  let rows = target.parentElement.parentElement.children.length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (document.getElementById(`${i}_${j}`))
        document.getElementById(`${i}_${j}`).click();
    }
  }
}
