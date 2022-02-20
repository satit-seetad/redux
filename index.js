import { combineReducers, createStore } from 'redux';
import { increaseCounterAction, decreaseCounterAction } from './actions/index.js';
import reducers from './reducers/index.js'

//store
const store = createStore(reducers);

//get state
console.log('init counter=' + store.getState().counter);

//launch action
store.dispatch(increaseCounterAction());
console.log('increase counter=' + store.getState().counter);

store.dispatch(increaseCounterAction());
console.log('increase counter=' + store.getState().counter);

store.dispatch(decreaseCounterAction());
console.log('decrease counter=' + store.getState().counter);