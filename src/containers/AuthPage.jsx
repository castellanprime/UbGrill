import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Redirect } from "react-router-dom";
import SignInForm from "../components/SignInForm.jsx";
import SignUpForm from "../components/SignUpForm.jsx";
import AuthPageFormLayout from "./AuthFormLayout.jsx";
import "../styles/extras.css";

export default class AuthPage extends Component {
  render() {
    if (this.props.loggedStatus === false) {
      return (
        <div className="outerContainer">
          <div className="mainContainer">
            <figure className="bannerImage">
              <div className="logo" />
              <figcaption>Ubgrill</figcaption>
            </figure>
            <AuthPageFormLayout>
              <Route
                exact
                path="/login"
                render={() => <SignInForm putToken={this.props.setToken} />}
              />
              <Route
                exact
                path="/register"
                render={() => <SignUpForm putToken={this.props.setToken} />}
              />
            </AuthPageFormLayout>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/reservations" />;
    }
  }
}
