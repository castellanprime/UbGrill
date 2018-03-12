import React, { Component } from "react";
import ErrMessages from "../components/ErrMessages.jsx";
import { isObjectEmpty, emptyObject } from "../services/helper.js";
import "../styles/reservation.css";

export default class AddTimesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromTime: "",
      endTime: "",
      errorMsgs: {}
    };
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  _handleInputChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  _validateTime(time) {
    if (time.length === 0) {
      return { isError: true, msg: "Cannot be empty!!" };
    }

    let re = /(\d+)\:(\d+)\s?$/;
    if (re.test(String(time).toLowerCase())) {
      let hr = parseInt(time.split(":")[0]);
      let min = parseInt(time.split(":")[1]);
      var strToPrint = "";
      if (hr < 9 || hr > 17) {
        strToPrint =
          "Times to reserve are from 09:00 to 17:00!!.Cannot reserve at " +
          `${time}`;
      }

      if (min > 59 || min < 0) {
        strToPrint = strToPrint + " and Incorrect time for mins: " + min;
      }

      if (strToPrint.length > 0) {
        return { isError: true, msg: strToPrint };
      } else {
        return { isError: false, msg: "" };
      }
    } else {
      return { isError: true, msg: "Format is incorrect" };
    }
  }

  _isFromTimeGreaterThanEndTime(time1, time2) {
    let fromDateString = "01 Jan 1970 " + `${time1}` + ":00 GMT";
    let endDateString = "01 Jan 1970 " + `${time2}` + ":00 GMT";
    let fromDate = Date.parse(fromDateString);
    let endDate = Date.parse(endDateString);
    let hrDiff = (endDate - fromDate) / 3600000;
    if (fromDate > endDate) {
      let errString =
        "Left input box time:" +
        `${time1}` +
        " > Right input box time:" +
        `${time2}`;
      return { isError: true, msg: errString };
    } else if (hrDiff < 1 || hrDiff > 5) {
      return {
        isError: true,
        msg: "The difference between left box and right box must be 1-5 hours"
      };
    } else {
      return { isError: false, msg: "" };
    }
  }

  _addTimes() {
    let fromTimeErr = this._validateTime(this.state.fromTime);
    let endTimeErr = this._validateTime(this.state.endTime);

    if (fromTimeErr.isError && endTimeErr.isError) {
      console.log("FromTime and EndTime has an error");
      this.setState(
        {
          errorMsgs: {
            ...this.state.errorMsgs,
            fromTimeErrMsg: fromTimeErr.msg,
            endTimeErrMag: endTimeErr.msg
          }
        },
        function () {
          console.log("FromTime error: ", fromTimeErr.msg);
          console.log("EndTime error: ", endTimeErr.msg);
        }
      );
    } else if (endTimeErr.isError && fromTimeErr.isError === false) {
      console.log("EndTime has an error");
      this.setState(
        {
          errorMsgs: {
            ...this.state.errorMsgs,
            endTimeErrMag: endTimeErr.msg
          }
        },
        function () {
          console.log("EndTime error: ", endTimeErr.msg);
        }
      );
    } else if (endTimeErr.isError === false && fromTimeErr.isError) {
      console.log("FromTime  has an error");
      this.setState(
        {
          errorMsgs: {
            ...this.state.errorMsgs,
            fromTimeErrMsg: fromTimeErr.msg
          }
        },
        function () {
          console.log("FromTime error: ", fromTimeErr.msg);
        }
      );
    } else {
      let timesErr = this._isFromTimeGreaterThanEndTime(
        this.state.fromTime,
        this.state.endTime
      );
      if (timesErr.isError) {
        console.log("Times has an error");
        this.setState({
          errorMsgs: {
            ...this.state.errorMsgs,
            timesErrMsg: timesErr.msg
          }
        });
        return;
      }
    }

    if (endTimeErr.isError === true || fromTimeErr.isError === true) {
      return;
    }

    this.props.onClick(this.state.fromTime, this.state.endTime);
    if (this._isEmpty(this.state.errorMsgs) === false) {
      emptyObject(this.state.errorMsgs);
    }
  }

  render() {
    let errorMsgs =
      isObjectEmpty(this.state.errorMsgs) === false ? (
        <ErrMessages mapToUnpack={this.state.errorMsgs} />
      ) : null;

    return (
      <div className="add-times-container-inner">
        <div className="add-times-cmd-box">
          <div className="add-times-cmd-box-inner">
            <input
              type="text"
              name="fromTime"
              placeholder="hh:mm"
              onChange={this._handleInputChange}
            />
            <span>to</span>
            <input
              type="text"
              name="endTime"
              placeholder="hh:mm"
              onChange={this._handleInputChange}
            />
          </div>
          <button type="button" name="Add" onClick={this._addTimes}>
            +
          </button>
        </div>
        {errorMsgs}
      </div>
    );
  }
}
