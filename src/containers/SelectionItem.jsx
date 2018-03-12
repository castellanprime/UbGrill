import React, { Component } from "react";
import "../styles/app.css";

export default class SelectionItem extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this._setSelected = this._setSelected.bind(this);
  }

  componentDidMount() {
    if (this.props.iparams.length !== null && this.props.iparams.length > 0) {
      let selecte = this.props.iparams === this.props.name;
      this.setState(
        {
          selected: selecte
        },
        function() {
          console.log(
            "Is this component the initial month?: ",
            this.state.selected
          );
        }
      );
    }
  }

  _setSelected(evt) {
    this.setState({
      selected: !this.state.selected
    });
    if (this.state.selected === false) this.props.onClick(evt.target.value);
  }

  render() {
    return (
      <button
        className={this.state.selected ? "actualItem selected" : "actualItem"}
        type="button"
        onClick={this._setSelected}
        value={this.props.name}
      >
        <p>{this.props.name}</p>
      </button>
    );
  }
}
