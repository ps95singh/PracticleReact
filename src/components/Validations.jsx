import React , { Component } from "react";
import "../App.css";

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}
export default class Validations extends Component {

state= initialState;

handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
    [event.target.name] : isCheckbox
    ? event.target.checked
    : event.target.value
    })
    console.log("data entered");
}

validate = () => {
       let nameError = "";
       let emailError = "";
       let passwordError = "";


    if(!this.state.name){
        nameError = "Name cannot be empty";
    }
    if(!this.state.email.includes('@')){
        emailError = " InValid Email ";
    }
    if(!this.state.password.includes('@' || '#' || '!' || '$')){
        passwordError = "Invalid Password";
    }
    if(emailError || nameError || passwordError){
        this.setState({emailError, nameError, passwordError});
        return false ;
    }
        return true ;
    };

handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
    console.log(this.state);
    this.setState(initialState);
    }

}

render(){
    return(
        <form onSubmit={this.handleSubmit}>
        <div>
        <input
        name="name"
        placeholder="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        </div>
        <div style={{
            color: "Red",
            fontsize: 12
        }}>
            {this.state.nameError}
        </div>
        <div>
        <input
        name="email"
        placeholder="email"
        value={this.state.email}
        onChange={this.handleChange}
        />
        </div>
        <div style={{
            color: "Red",
            fontsize: 12
        }}>
            {this.state.emailError}
        </div>
        <div>
        <input
        name="password"
        type="password"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleChange}
        />
        </div>
        <div style={{
            color: "Red",
            fontsize: 12
        }}>
            {this.state.passwordError}
        </div>
        <div>
            <button onClick={this.handleSubmit}>
                Submit
            </button>
        </div>
        </form>
    );
}
}