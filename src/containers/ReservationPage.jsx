import React, { Component } from "react";
import Carousel from "./CarouselWrapper.jsx";
import MonthItems from "../components/MonthItems.jsx";
import AppHeader from "../components/Header.jsx";
import DateHeader from "./DateHeader.jsx";
import CalendarGrid from "./CalendarGrid.jsx";
import AppContainer from "../components/AppContainer.jsx";
import EditReservation from "../components/EditReservation.jsx";
import UbgrillAPI from "../services/api.js";
import "../styles/app.css";
import "../styles/reservation.css";

export default class ReservationPage extends Component {
  constructor() {
    super();
    this.state = {
      year: 0,
      selectedMonth: " ",
      currentMonth: "",
      currentDay: 0,
      fromTime: " ",
      endTime: " ",
      day: 0,
      months: [
        ["JAN", "FEB", "MAR"],
        ["APR", "MAY", "JUN"],
        ["JUL", "AUG", "SEP"],
        ["OCT", "NOV", "DEC"]
      ],
      canNotSubmit: true
    };
    this.logout = this.logout.bind(this);
    this.goToAccountPage = this.goToAccountPage.bind(this);
    this.setSelectedDay = this.setSelectedDay.bind(this);
    this.setSelectedYear = this.setSelectedYear.bind(this);
    this.setSelectedMonth = this.setSelectedMonth.bind(this);
    this.setSelectedTimes = this.setSelectedTimes.bind(this);
    this.setCanNotSubmit = this.setCanNotSubmit.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
    this.submitCreatedReservation = this.submitCreatedReservation.bind(this);
  }

  logout() {
    this.setState(
      {
        year: 0,
        selectedMonth: " ",
        currentMonth: "",
        currentDay: 0,
        fromTime: " ",
        endTime: " ",
        day: 0,
        months: [
          ["JAN", "FEB", "MAR"],
          ["APR", "MAY", "JUN"],
          ["JUL", "AUG", "SEP"],
          ["OCT", "NOV", "DEC"]
        ],
        canNotSubmit: true
      },
      function() {
        this.props.removeToken();
      }
    );
  }

  goToAccountPage() {
    this.props.history.push("/me");
  }

  goToStore() {
    this.props.history.push("/store");
  }

  componentDidMount() {
    let unrolledMonths = [].concat(...this.state.months);
    let curMonth = unrolledMonths[new Date().getMonth()];
    let curDay = new Date().getDate();
    let curYear = new Date().getFullYear();
    this.setState({ currentMonth: curMonth, currentDay: curDay, year: curYear }, function() {
      console.log("Unrolledmonths: ", unrolledMonths);
      console.log("Current month: ", this.state.currentMonth);
      console.log("Current day: ", this.state.currentDay);
      console.log("Current year: ", this.state.year);
    });
    //this.state.currentMonth = curMonth;
    console.log("Current month: ", this.state.currentMonth);
  }

  setSelectedMonth(val) {
    this.setState({
      selectedMonth: val
    });
  }

  setSelectedYear(val) {
    this.setState({
      year: val
    });
  }

  setSelectedTimes(arr) {
    this.setState({
      fromTime: arr.fromTime,
      endTime: arr.endTime,
      canNotSubmit: false
    });
  }

  setSelectedDay(val) {
    this.setState({ day: val }, function() {
      console.log("Selected day:", this.state.day);
    });
  }

  setCanNotSubmit() {
    this.setState({
      canNotSubmit: true
    });
  }

  setSelectedDate(day, month, year) {
    var selectedDate = "01 Jan 1900";
    if (day > 0) {
      selectedDate = day + " " + month + " " + year;
    }
    console.log("SelectedDate: ", selectedDate);
    return selectedDate;
  }

  submitCreatedReservation() {
    let reservation_new = {};
    let day_reserved = this.state.day.toString();
    let year_reserved = this.state.year.toString();
    let date_reserved =
      day_reserved + "-" + this.state.selectedMonth + "-" + year_reserved;
    reservation_new["date_reserved"] = date_reserved;
    reservation_new["time_reserved_start"] = this.state.fromTime;
    reservation_new["time_reserved_end"] = this.state.endTime;
    // Send the reservation to the api
    let status = UbgrillAPI.addReservation(
      reservation_new,
      this.props.myName,
      this.props.myToken
    );
    console.log("Status after submitting reservation: ", status);
    this.goToStore();
  }

  render() {
    let mntItems =
      this.state.currentMonth.length > 0 ? (
        <Carousel page={"horizontal"}>
          {this.state.months.map((arr, i) => (
            <MonthItems
              key={i}
              child={arr}
              func={this.setSelectedMonth}
              currentMth={this.state.currentMonth}
            />
          ))}
        </Carousel>
      ) : null;

    let initialDate = this.setSelectedDate(
      this.state.day,
      this.state.currentMonth,
      this.state.year
    );

    return (
      <div className="outerappcontainer">
        <AppHeader
          onClick={this.logout}
          currentPath={this.props.location}
          goToNextPage={this.goToAccountPage}
        />
        <AppContainer title={"Reservation"}>
          <DateHeader func={this.setSelectedYear} />
          {mntItems}
          <CalendarGrid
            month={this.state.currentMonth}
            currentDay={this.state.currentDay}
            selectedDay={this.state.day}
            onClick={this.setSelectedDay}
          />
          <EditReservation
            setTimes={this.setSelectedTimes}
            setCanNotSubmit={this.setCanNotSubmit}
          />
          <div className="subpage-cmd-box">
            <button
              className={
                this.state.canNotSubmit
                  ? "submit-reservation-btn disabled"
                  : "submit-reservation-btn"
              }
              type="button"
              onClick={this.submitCreatedReservation}
              disabled={this.state.canNotSubmit}
            >
              <div className="submit-reservation-btn-img" />
              <div className="submit-reservation-btn-title">STORE</div>
            </button>
          </div>
        </AppContainer>
      </div>
    );
  }
}
