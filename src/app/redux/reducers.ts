import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { flightsReducer } from './modules/flights';
import { IStore } from './IStore';

const {reducer} = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
    routing: routerReducer,
    flights: flightsReducer,
    reduxAsyncConnect: reducer,
});

export default rootReducer;
