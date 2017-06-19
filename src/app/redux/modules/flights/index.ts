import { IFlights, IFlightItem } from 'models/flights';

const data: IFlightItem[] = require('./data.json').flights;

const initialState: IFlights = {
    list: data,
};

export function flightsReducer(state: IFlights = initialState, action: Redux.Action) {
    switch (action.type) {
        default:
            return state;
    }
}
