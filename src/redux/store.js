import {compose, applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/rootReducer';

function saveToLocalStorage(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem('state');
  if (serializedState === null) return undefined;
  return JSON.parse(serializedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const presistedState = loadFromLocalStorage();

const store = legacy_createStore(
  rootReducer,
  presistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;