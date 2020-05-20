import React, { Component } from 'react';

export default class MyForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name] : isCheckbox
            ? event.target.checked
            : event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("Submitted");
    }


    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
            <textarea
            name="favouritePet"
            value={this.state.location}
            onChange={this.handleChange}
            />
            <div>
            <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}>
                <option>Mr.</option>
                <option>Dr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
            </select>
            <input
            name="rememberMe"
            type="checkbox"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            />
            </div>
            <button type="submit">
            Submit
            </button>
        </form>
        );
    }
}