import State from '../State';

State.on('increment', function(){
	var state = State.get();
	state.set({counter: state.counter + 1});
});

State.on('decrement', function(){
	var state = State.get();
	state.set({counter: state.counter - 1});
});
