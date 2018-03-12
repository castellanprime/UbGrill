import React, { Component } from "react";
import "../styles/reservation.css";

export default class CalendarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBooked: false
    };
    this._setDaytoSelect = this._setDaytoSelect.bind(this);
    this._book = this._book.bind(this);
  }

  _book() {
    if (this.state.hasBooked === false) {
      this.setState(
        {
          hasBooked: true
        },
        function () {
          console.log("Inner value:", this.props.item);
          this.props.onClick(this.props.item);
        }
      );
    }
  }

  _setDaytoSelect(evt) {
    evt.preventDefault();
    this._book();
  }

  render() {
    let commandItems =
      this.props.canBook === true && this.props.allbooked === false ? (
        <div className="reservation-cmd-switch">
          <a href="reservation-details" onClick={this._setDaytoSelect}>
            ...
          </a>
        </div>
      ) : null;

    return (
      <div className="calendar-day-container">
        <div className="day-number">{this.props.item}</div>
        <div
          className={
            this.props.canBook && this.state.hasBooked === false
              ? "icon-notyetbooked"
              : this.state.hasBooked
                ? "icon-booked"
                : this.props.allBooked ? "icon-unavailable" : "icon-cannotbook"
          }
        />
        {commandItems}
      </div>
    );
  }
}
