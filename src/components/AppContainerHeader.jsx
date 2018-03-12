import React, { Component } from "react";
import "../styles/app.css";
import "../styles/reservation.css";
import "../styles/store.css";
import "../styles/account.css";
import "../styles/myorder.css";

export default class AppContainerHeader extends Component {
  render() {
    const { titler } = this.props;
    const appcontainerheaderimg =
      "mainappcontainer-header-img-" + titler.toLowerCase();
    return (
      <figure className="mainappcontainer-header">
        <div className={appcontainerheaderimg} />
        <figcaption>{titler}</figcaption>
      </figure>
    );
  }
}
