import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxThunk from 'redux-thunk';

export default function config(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk, reduxImmutableStateInvariant())
  )
}
