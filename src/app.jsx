
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { Component } from 'react';
import { getStore } from 'freezer-redux-devtools';

import CounterApp from './CounterApp';

import State from './State';

// Bind the reactions
import './reactions/CounterReactions';

// use freezer-redux-devtools to create a redux store for
// the dev tools
const store = getStore( State );


/**
 * Root component including devtools
 * and refreshing on state change
 */
export default class App extends Component {
  render() {
    return (
      <div>
      	<CounterApp state={ State.get() } />
			<DebugPanel top right bottom>
				<DevTools store={store}	monitor={LogMonitor} />
			</DebugPanel>
      </div>
    );
  }
  componentDidMount() {
  	State.on('update', () => this.forceUpdate());
  }
}
