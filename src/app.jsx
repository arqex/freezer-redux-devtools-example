import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import React, { Component } from 'react';

import { supportChromeExtension } from 'freezer-redux-devtools/freezer-redux-middleware';
import { getStore } from 'freezer-redux-devtools';

import CounterApp from './CounterApp';

import State from './State';

// Bind the reactions
import './reactions/CounterReactions';


var tools = '';
if( window.devToolsExtension ){
	// Use the extension if available
	supportChromeExtension( State );
}
else {
	// use freezer-redux-devtools to create a redux store for
	// the dev tools
	const store = getStore( State );
	tools = (
		<DebugPanel top right bottom>
			<DevTools store={store} monitor={LogMonitor} />
		</DebugPanel>
	);
}

/**
 * Root component including devtools
 * and refreshing on state change
 */
export default class App extends Component {
  render() {
    return (
      <div>
      	<CounterApp state={ State.get() } />
	     	{ tools }
      </div>
    );
  }
  componentDidMount() {
  	State.on('update', () => this.forceUpdate());
  }
}
