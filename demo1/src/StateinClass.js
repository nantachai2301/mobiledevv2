import React, { Component } from 'react';

export default class StateInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      counter:0,
    };
  }
  clickPlus = () => {
    this.setState({
      counter: this.state.counter + 1,
  });
};
clickMinus = () => {
  this.setState({
    counter: this.state.counter - 1,
});
};

  render() {
      return (
      <div>
        <p>
          <b>Name </b>: {this.state.name}
        </p>
        <p>
          <b>Counter</b> = {this.state.counter}
        </p>
        <button onClick={this.clickPlus}>+</button>
        <button onClick={this.clickMinus}>-</button>
      </div>
    );
  }
}