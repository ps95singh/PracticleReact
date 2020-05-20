/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import shortid from 'shortid';

export default class ToDoForm extends Component {
    state = {
      text: '',
    };

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false,
      });
      this.setState({
        text: '',
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button
            onClick={this.handleSubmit}
          >
            Add ToDo
          </button>
        </form>
      );
    }
}
