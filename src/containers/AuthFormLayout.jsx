import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/extras.css";

const AuthPageFormLayout = ({ children }) => (
  <div className="formContainer">
    <header>
      <div>
        <p>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            Sign In
          </NavLink>
        </p>
      </div>
      <div>
        <p>
          <NavLink
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
            activeStyle={{ textDecoration: "underline" }}
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </header>
    {children}
  </div>
);

export default AuthPageFormLayout;
