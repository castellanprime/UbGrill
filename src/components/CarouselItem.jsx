import React, { Component } from "react";
import "../styles/app.css";
export default class CarouselItem extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === this.props.activeIndex ? "item is_ref" : "item"
        }
      >
        {this.props.child}
      </li>
    );
  }
}
