import React, {Component} from 'react';

export default class Counter extends Component {


    render() {
        // console.log("Render function invoked");
    return (
        <div>
            <div>count: {this.props.count}</div>
            <button onClick={this.props.decrement}>decrement</button>
            <button onClick={this.props.increment}>increment</button>
        </div>

    );
  }
  }

