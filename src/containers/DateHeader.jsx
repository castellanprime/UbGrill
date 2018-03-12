import React, { Component } from "react";
import Arrow from "../components/Arrow.jsx";
import "../styles/reservation.css";

export default class DateHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0
    };
    this._decreaseYear = this._decreaseYear.bind(this);
    this._increaseYear = this._increaseYear.bind(this);
    this._getCurYear = this._getCurYear.bind(this);
    this._setYear = this._setYear.bind(this);
  }

  componentDidMount() {
    let currentYear = this._getCurYear();
    this.setState({
      year: currentYear
    });
  }

  _setYear(val) {
    this.props.func(val);
    this.setState({
      year: val
    });
  }

  _increaseYear(evt) {
    evt.preventDefault();
    let curYear = this.state.year;
    curYear = curYear + 1;
    this._setYear(curYear);
  }

  _decreaseYear(evt) {
    evt.preventDefault();
    let curYear = this.state.year;
    curYear = curYear - 1;
    this._setYear(curYear);
  }

  _getCurYear() {
    var curYear = parseInt(new Date().getFullYear());
    return curYear;
  }

  render() {
    return (
      <div className="dateheader">
        <Arrow direction={"left"} onClick={this._decreaseYear} />
        <div className="yearbox">
          <span>{this.state.year}</span>
        </div>
        <Arrow direction={"right"} onClick={this._increaseYear} />
      </div>
    );
  }
}
