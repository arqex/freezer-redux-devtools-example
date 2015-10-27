import React, { Component } from 'react';
import Counter from './components/Counter';

class CounterApp extends Component {
  render() {
    return (
    	<div className="wrapper">
    		<h1>Freezer-redux-devtools example</h1>
      	<Counter state={ this.props.state } />
      	<i>By <a href="http://arqex.com">arqex</a>. <a href="https://github.com/arqex/freezer-redux-devtools-example.git">GitHub</a></i>
      </div>
    );
  }
}

export default CounterApp;
