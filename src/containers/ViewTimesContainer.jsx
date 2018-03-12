import React, { Component } from "react";
import "../styles/reservation.css";

export default class ViewTimesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexToBeRemoved: 0
    };
    this._setIndexToBeRemoved = this._setIndexToBeRemoved.bind(this);
  }

  _setIndexToBeRemoved(evt) {
    this.setState(
      {
        indexToBeRemoved: parseInt(evt.target.name)
      },
      function () {
        this.props.onClick(this.state.indexToBeRemoved);
      }
    );
  }

  render() {
    return (
      <div className="times-item-container-outer">
        {this.props.values.map((item, i) => (
          <div className="times-item-container" key={i}>
            <div className="times-item-container-inner">
              <div>{item["fromTime"]}</div>
              <span>to</span>
              <div>{item["endTime"]}</div>
            </div>
            <button type="button" name={i} onClick={this._setIndexToBeRemoved}>
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}