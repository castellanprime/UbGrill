import React, { Component } from "react";
import AppHeaderDropDownItem from "../components/HeaderDropDownItem.jsx";
import "../styles/app.css";

export default class AppHeaderDropDown extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    let dropDownItems =
      this.props.currentPath !== "me" ? (
        <div
          className={
            this.state.isVisible ? "dropdownlist show" : "dropdownlist"
          }
        >
          <AppHeaderDropDownItem
            toGoto={this.props.gotoNextPage}
            title={"My Account"}
          />
          <AppHeaderDropDownItem toGoto={this.props.goBack} title={"Logout"} />
        </div>
      ) : (
        <div
          className={
            this.state.isVisible ? "dropdownlist show" : "dropdownlist"
          }
        >
          <AppHeaderDropDownItem
            toGoto={this.props.gotoNextPage}
            title={"Reservations"}
          />
          <AppHeaderDropDownItem toGoto={this.props.goBack} title={"Logout"} />
        </div>
      );

    return (
      <div className="dropdownContainer">
        <button type="button" onClick={this.show} className={"acctnlogoButton"}>
          <div />
        </button>
        {dropDownItems}
      </div>
    );
  }
}
