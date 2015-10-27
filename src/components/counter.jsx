import React, { Component, PropTypes } from 'react';
import State from '../State';

export default class Counter extends Component {
  render() {
  	var state = this.props.state;
    return (
      <p>
        Clicked: {state.counter} times
        {' '}
        <button onClick={ this.increment.bind(this) }>+</button>
        {' '}
        <button onClick={ this.decrement.bind(this) }>-</button>
        {' '}
      </p>
    );
  }
  increment() {
  	State.trigger('increment', 'some', 'arguments' );
  }
  decrement() {
  	State.trigger('decrement', 'other', 'args' );
  }
}
