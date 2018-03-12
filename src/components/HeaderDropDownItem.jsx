import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";

export default class AppHeaderDropDownItem extends Component {
  render() {
    return (
      <div className="dropdownlistitem" onClick={this.props.toGoto}>
        <p>{this.props.title}</p>
      </div>
    );
  }
}
