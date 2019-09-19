import React, { Component } from "react";

let endGame = false;

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

  render() {
    // deconstruct
    let { row, column, value } = this.props;
    let { clicked, flag } = this.state;

    // add different class names based on different status
    const isBug = values === "bug" ? "isBug" : "";
    const classes = `cell clicked ${isBug}`;

    return (
      <td
        id={`${row}_${column}`}
        className={classes}
        onCLick={this.clickHandler}
        onContextMenu={this.flagHandler}
      >
        {clicked && !flag ? value : ""}
        {/* {flag ? && } */}
      </td>
    );
  }
}
