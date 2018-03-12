import React, { Component } from "react";
import AppContainerHeader from "./AppContainerHeader.jsx";
import "../styles/app.css";

export default class AppContainer extends Component {
  render() {
    return (
      <div className="appcontainer">
        <div className="mainappcontainer">
          <AppContainerHeader titler={this.props.title} />
          <div className="innerappcontainer">
            <main>
              <div className="appContentContainer">{this.props.children}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}
