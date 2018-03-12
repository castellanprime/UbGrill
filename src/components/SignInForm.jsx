import React, { Component } from "react";
import Message from "./Message.jsx";
import "../styles/extras.css";
import "../styles/signin.css";
import { Redirect } from "react-router-dom";
import {
  validateFormInput,
  doesFormHaveErrors,
  isObjectEmpty
} from "../services/helper.js";
import UbgrillAPI from "../services/api.js";
export default class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      formerrors: {
        username: "",
        password: ""
      },
      submission: {
        errorCode: 0,
        errorMessage: ""
      },
      hasToken: false
    };
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleFormSumbit = this._handleFormSumbit.bind(this);
  }

  _handleFormSumbit(evt) {
    evt.preventDefault();
    let errors = validateFormInput(this.state);
    let response = doesFormHaveErrors(errors);
    let formdata = {
      username: this.state.username,
      password: this.state.password
    };
    if (response === true) {
      this.setState({
        formerrors: errors
      });
      console.log(
        "Values[(err-username):" +
          errors.username +
          ", (err-password):" +
          errors.password
      );
      return;
    }

    let authDetails = UbgrillAPI.auth(formdata.username, formdata.password);
    console.log("Autdetails: ", authDetails);
    if (isObjectEmpty(authDetails) === true) {
      let submittedValues = {
        errorCode: 500,
        errorMessage: "User was not found on server"
      };
      this.setState({
        submission: submittedValues
      });
    } else {
      console.log("Autdetails: ", authDetails);
      this.props.putToken(authDetails["token"], authDetails["username"]);
    }
  }

  _handleInputChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    let usernameStatus =
      this.state.formerrors.username.length > 0 ? (
        <Message name="username" error={this.state.formerrors.username} />
      ) : null;
    let passwordStatus =
      this.state.formerrors.password.length > 0 ? (
        <Message name="password" error={this.state.formerrors.password} />
      ) : null;
    let submissionStatus =
      this.state.submission.errorMessage.length > 0 ? (
        <Message name="LoginError" error={this.state.submission.errorMessage} />
      ) : null;

    return (
      <form className="innerFormContainer" onSubmit={this._handleFormSumbit}>
        <div className="signinFormGroup">
          <div>
            <label htmlFor="username">
              USERNAME<span title="Username should be at least 5 characters">
                &#65533;
              </span>
            </label>
            <input
              className="form-control"
              name="username"
              required
              type="text"
              onChange={this._handleInputChange}
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
              required
              name="password"
              type="text"
              onChange={this._handleInputChange}
            />
            {passwordStatus}
          </div>
        </div>
        {submissionStatus}
        <div />
        <footer>
          <input
            className="submitButton"
            type="submit"
            name="submit"
            value="Login"
          />
        </footer>
      </form>
    );
  }
}
