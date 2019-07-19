import React, { Component } from 'react';
import "./RadioButton.css";

class RadioButton extends Component {
  render(){
    return (
      <li className="category-item">
        <label className="radio-label"><input type="radio" name="type" onClick={this.props.onFilter} value={this.props.value}></input><i></i>{this.props.value}</label>
      </li>
    );
  }
}

export default RadioButton;
