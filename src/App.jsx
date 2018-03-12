import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter, Redirect } from "react-router-dom";
import AuthPage from "./containers/AuthPage.jsx";
import ReservationPage from "./containers/ReservationPage.jsx";
import AccountPage from "./containers/AccountPage.jsx";

function AuthenticatedRoute({ component: Component, loggedStatus, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        loggedStatus ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      username: " ",
      token: " "
    };
    this._setLoggedStatus = this._setLoggedStatus.bind(this);
    this._setAuthToken = this._setAuthToken.bind(this);
    this._removeAuthToken = this._removeAuthToken.bind(this);
  }

  _setLoggedStatus(val) {
    this.setState({ isLoggedIn: val }, function() {
      console.log("isLoggedIn: ", this.state.isLoggedIn);
    });
  }

  _setAuthToken(val, user) {
    this.setState({ token: val, username: user }, function() {
      console.log("Username: ", this.state.username);
      console.log("Token: ", this.state.token);
      this._setLoggedStatus(true);
    });
  }

  _removeAuthToken() {
    this.setState({ token: " ", username: " " }, function() {
      console.log("Username: ", this.state.username);
      console.log("Token: ", this.state.token);
      this._setLoggedStatus(false);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route
            exact
            path="/login"
            render={() => (
              <AuthPage
                setToken={this._setAuthToken}
                loggedStatus={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <AuthPage
                setToken={this._setAuthToken}
                loggedStatus={this.state.isLoggedIn}
              />
            )}
          />
          <AuthenticatedRoute
            component={ReservationPage}
            loggedStatus={this.state.isLoggedIn}
            path="/reservations"
            myToken={this.state.token}
            myName={this.state.username}
            removeToken={this._removeAuthToken}
          />
          <AuthenticatedRoute
            component={AccountPage}
            loggedStatus={this.state.isLoggedIn}
            path="/me"
            myToken={this.state.token}
            myName={this.state.username}
            removeToken={this._removeAuthToken}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
