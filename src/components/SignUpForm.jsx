import React, { Component } from "react";
import Message from "./Message.jsx";
import "../styles/extras.css";
import "../styles/signup.css";
import { validateFormInput, doesFormHaveErrors } from "../services/helper.js";
import { Redirect } from "react-router-dom";
import UbgrillAPI from "../services/api.js";
export default class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      formerrors: {
        username: "",
        password: "",
        fullname: "",
        email: ""
      },
      hasToken: false
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    let errors = validateFormInput(this.state);
    let response = doesFormHaveErrors(errors);
    let formdata = {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.fullname.split("/")[0],
      lastname: this.state.fullname.split("/"[1]),
      email: this.state.email
    };
    if (response === true) {
      this.setState({
        formerrors: errors
      });
      console.log(
        "Values[(err-username):" +
          errors.username +
          ", (err-password):" +
          errors.password +
          ", (err-fullname):" +
          errors.fullname +
          ", (err-email):" +
          errors.email
      );
      return;
    }
    let authToken = UbgrillAPI.saveUser(
      formdata.username,
      formdata.password,
      formdata.firstname,
      formdata.lastname,
      formdata.email
    );
    this.props.putToken(authToken, formdata.username);
    this.setState({
      hasToken: true
    });
  }

  _handleInputChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    if (this.state.hasToken === false) {
      let usernameStatus =
        this.state.formerrors.username.length > 0 ? (
          <Message name="username" error={this.state.formerrors.username} />
        ) : null;
      let passwordStatus =
        this.state.formerrors.password.length > 0 ? (
          <Message name="password" error={this.state.formerrors.password} />
        ) : null;
      let fullnameStatus =
        this.state.formerrors.fullname.length > 0 ? (
          <Message name="username" error={this.state.formerrors.username} />
        ) : null;
      return (
        <form className="innerFormContainer" onSubmit={this._handleFormSumbit}>
          <div className="signupFormGroup">
            <div>
              <label htmlFor="username">
                USERNAME<span title="Username should be at least 5 characters">
                  &#65533;
                </span>
              </label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={this._handleInputChange}
                required
              />
              {usernameStatus}
            </div>
            <div>
              <label htmlFor="password">
                PASSWORD<span title="Password should be at least 8 characters and contain at least a number">
                  &#65533;
                </span>
              </label>
              <input
                className="form-control"
                type="text"
                name="password"
                onChange={this._handleInputChange}
                required
              />
              {passwordStatus}
            </div>
            <div>
              <label
                htmlFor="fullname"
                title="Write your full name as Lastname/Firstname"
              >
                FULLNAME<span title="Write your full name as Lastname/Firstname">
                  &#65533;
                </span>
              </label>
              <input
                className="form-control"
                type="text"
                name="fullname"
                pattern="[a-zA-Z]\/[a-zA-Z]"
                onChange={this._handleInputChange}
                required
              />
              {fullnameStatus}
            </div>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this._handleInputChange}
                required
              />
            </div>
          </div>
          <footer>
            <input
              className="submitButton"
              type="submit"
              name="submit"
              value="Register"
            />
          </footer>
        </form>
      );
    } else {
      return <Redirect to="/resevations" />;
    }
  }
}
