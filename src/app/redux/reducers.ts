import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { aviaReducer } from './modules/avia';
import { IStore } from './IStore';

const {reducer} = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
    routing: routerReducer,
    avia: aviaReducer,
    reduxAsyncConnect: reducer
});

export default rootReducer;
