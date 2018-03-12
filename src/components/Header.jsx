import React, { Component } from "react";
import AppHeaderDropDown from "../containers/AppHeaderDropDown.jsx";
import "../styles/app.css";
export default class AppHeader extends Component {
  render() {
    return (
      <header className="appheader">
        <figure className="applogo">
          <div />
          <figcaption>Ubgrill</figcaption>
        </figure>
        <AppHeaderDropDown
          goBack={this.props.onClick}
          currentPath={this.props.currentPath}
          goToNextPage={this.props.goToNextPage}
        />
      </header>
    );
  }
}
