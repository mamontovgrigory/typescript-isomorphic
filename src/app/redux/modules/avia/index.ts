import { IAvia, ICarrier, IFlight, IGetCarriersSuccess, IGetFlightsSuccess } from 'models/avia';

export const GET_FLIGHTS_SUCCESS = 'avia/GET_FLIGHTS_SUCCESS';
export const GET_CARRIERS_SUCCESS = 'avia/GET_CARRIERS_SUCCESS';

const initialState: IAvia = {
    flights: [],
    carriers: []
};

export function aviaReducer(state: IAvia = initialState, action: Redux.Action) {
    switch (action.type) {
        case GET_CARRIERS_SUCCESS:
            const {carriers} = action as IGetCarriersSuccess;
            return Object.assign({}, state, {carriers});
        case GET_FLIGHTS_SUCCESS:
            const {flights} = action as IGetFlightsSuccess;
            return Object.assign({}, state, {flights});
        default:
            return state;
    }
}

export function getFlightsSuccess(flights: IFlight[]): IGetFlightsSuccess {
    return {
        type: GET_FLIGHTS_SUCCESS,
        flights
    };
}

export function getCarriersSuccess(carriers: ICarrier[]): IGetCarriersSuccess {
    return {
        type: GET_CARRIERS_SUCCESS,
        carriers
    };
}

export function getFlights() {
    return async (dispatch) => {
        const flights: IFlight[] = await require('./data.json').flights;
        dispatch(getFlightsSuccess(flights));
        dispatch(getCarriers(flights));
    };
}

export function getCarriers(flights: IFlight[]) {
    return (dispatch) => {
        const carriers: ICarrier[] = flights.map((flight) => {
            return flight.carrier;
        }).filter((elem, pos, arr) => {
            return arr.indexOf(elem) === pos;
        }).map((carrierName) => {
            return {
                name: carrierName
            };
        });
        dispatch(getCarriersSuccess(carriers));
    };
}
