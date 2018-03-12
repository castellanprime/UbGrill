import React, { Component } from "react";
import "../styles/app.css";
export default class Arrow extends Component {
  render() {
    const { direction, onClick } = this.props;
    if (direction === "left") {
      return (
        <a href="" onClick={onClick} className="arrow">
          <div>&#9664;</div>
        </a>
      );
    } else if (direction === "right") {
      return (
        <a href="" onClick={onClick} className="arrow">
          <div>&#9654;</div>
        </a>
      );
    }
  }
}
