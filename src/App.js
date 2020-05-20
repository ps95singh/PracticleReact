/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import './App.css';
// import ImageSlider from './components/ImageSlider';
// import Counter from './components/Counter';
import ToDoList from './components/ToDoList';
// import ToDoForm from './components/ToDoForm';
// import Header from './components/Header';
// import RandomUser from './components/RandomUser';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}
