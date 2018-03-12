import React, { Component } from "react";
import SelectionItem from "../containers/SelectionItem.jsx";
import "../styles/app.css";

export default class MonthItems extends Component {
  render() {
    return (
      <div className="actualItemContainer">
        {this.props.child.map((link, i) => (
          <SelectionItem
            key={i}
            name={link}
            onClick={this.props.func}
            iparams={this.props.currentMth}
          />
        ))};
      </div>
    );
  }
}
