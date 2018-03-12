import React, { Component } from "react";
import AddTimesComponent from "../containers/AddTimesContainer.jsx";
import ViewTimesComponent from "../containers/ViewTimesContainer.jsx";
import { printArrOfObjects } from "../services/helper.js";
import Message from "../components/Message.jsx";
import "../styles/reservation.css";
export default class ReservationTimes extends Component {
  constructor() {
    super();
    this.state = {
      times: [],
    };
    this._setTimes = this._setTimes.bind(this);
    this._removeTimes = this._removeTimes.bind(this);
  }

  _setTimes(fromTimeStr, endTimeStr) {
    if (this.state.times < 1) {
      let arr_obj = { fromTime: fromTimeStr, endTime: endTimeStr };
      this.setState(
        {
          times: [
            ...this.state.times,
            arr_obj
          ]
        },
        function () {
          printArrOfObjects(this.state.times);
          this.props.setTimes(arr_obj);
        }
      );
    }
  }

  _removeTimes(index) {
    let curItems = this.state.times;
    let itemRemoved = curItems.splice(index, 1);
    this.setState(
      {
        times: curItems
      },
      function () {
        console.log("Item removed: ", itemRemoved);
        this.props.setCanSubmit();
      }
    );
  }

  render() {
    return (
      <div className="reservation-times-container">
        <div>
          <p>
            <small>
              <i>
                * The start times for reservations are between 9.00am and
                6.00pm. The end times are between 10.00am and 10.00pm.
              </i>
            </small>
          </p>
          <p>
            <small>
              <i>* Minimum time to reserve is 1 hour</i>
            </small>
          </p>
        </div>
        <fieldset className="add-times-container">
          <legend> Add times to complete reservation </legend>
          <AddTimesComponent onClick={this._setTimes} />
        </fieldset>
        <fieldset className="view-times-container">
          <legend> View booked times </legend>
          <ViewTimesComponent
            values={this.state.times}
            onClick={this._removeTimes}
          />
        </fieldset>
      </div>
    );
  }
}
