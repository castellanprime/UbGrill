import React, { Component } from "react";
import ReservationTimes from "../containers/ReservationTimes.jsx";
import "../styles/reservation.css";

export default class EditReservation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="reservations-details-container" id="reservation-details">
        <div className="selected-reservation-day">
          <div>26 Oct 2017</div>
        </div>
        <ReservationTimes 
          setTimes={this.props.setTimes}
          setCanSubmit={this.props.setCanNotSubmit} 
        />
      </div>
    );
  }
}
