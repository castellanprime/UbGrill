import React, { Component } from "react";
import Message from "./Message.jsx";
import "../styles/reservation.css";
export default class ErrMessages extends Component {
  render() {
    let errList = Object.entries(this.props.mapToUnpack).map(
      ([key, value], i) => {
        return <Message name={key} error={value.toString()} key={i} />;
      }
    );

    return <div className="add-times-cmd-errs">{errList}</div>;
  }
}
