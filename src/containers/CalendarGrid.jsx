import React, { Component } from "react";
import CalendarGridItem from "./CalendarGridItem.jsx";
import "../styles/reservation.css";

export default class CalendarGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      year: 2018,
      months: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
      ],
      daysMonths: [],
      itemsToMap: []
    };
    this._getDaysInMonth = this._getDaysInMonth.bind(this);
    this._getArray = this._getArray.bind(this);
    this._getNumOfDaysGivenMonth = this._getNumOfDaysGivenMonth.bind(this);
    this._setAvailableToBooked = this._setAvailableToBooked.bind(this);
  }

  _book() { }

  componentDidMount() {
    let daysInMonth = [];
    for (let index in this.state.months) {
      let obj = {};
      obj.month = this.state.months[index];
      obj.numOfDays = this._getDaysInMonth(
        parseInt(index) + 1,
        this.state.year
      );
      daysInMonth.push(obj);
    }
    this.setState({
      daysMonths: daysInMonth
    });
  }

  _getNumOfDaysGivenMonth(month) {
    for (let index in this.state.daysMonths) {
      let obj = this.state.daysMonths[index];
      if (obj.month === month) {
        return obj.numOfDays;
      }
    }
  }

  _getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  _getArray(val) {
    var k = [];
    for (var i = 1; i <= val; i++) {
      k.push(i);
    }
    return k;
  }

  _setAvailableToBooked(day, mnth, selectedday) {
    // This function ideally should get some values from api
    let arr = this._getArray(this._getNumOfDaysGivenMonth(mnth));
    var l = [];
    for (let i in arr) {
      if (arr[i] < day) {
        l.push({
          item: arr[i],
          allbooked: false,
          canBook: false,
          hasBooked: false
        });
      } else {
        l.push({
          item: arr[i],
          allbooked: false,
          canBook: true,
          hasBooked: false
        });
      }
    }
    for (let i in l) {
      if (l[i].item === selectedday) {
        console.log("I have already booked this day: ", l[i].item);
        l[i] = Object.assign({}, l[i], { hasBooked: true });
      }
    }
    return l;
  }

  render() {
    let numOfItems = this._setAvailableToBooked(
      this.props.currentDay,
      this.props.month,
      this.props.selectedDay
    );
    return (
      <div className="calendar-grid">
        {numOfItems.map((item, i) => (
          <CalendarGridItem
            item={item.item}
            allbooked={item.allbooked}
            canBook={item.canBook}
            hasBooked={item.hasBooked}
            key={i}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}
