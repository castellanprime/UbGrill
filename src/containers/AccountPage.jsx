import React, { Component } from "react";
import Carousel from "./CarouselWrapper.jsx";
import MonthItems from "../components/MonthItems.jsx";
import AppHeader from "../components/Header.jsx";
import UbgrillAPI from "../services/api.js";

export default class AccountPage extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState(
      {
        reservations: []
      },
      function() {
        this.props.removeToken();
      }
    );
  }

  render() {
    return (
      <div>
        <header>Fools</header>
        <p>This is the Reservations Page</p>
        <button type="button" onClick={this.logout}>
          Log Out
        </button>
        <p>
          {this.props.myName}:{this.props.myToken}
        </p>
      </div>
    );
  }
}
