import { createStore, applyMiddleware } from 'redux';
import { reducer } from './listReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';


export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))