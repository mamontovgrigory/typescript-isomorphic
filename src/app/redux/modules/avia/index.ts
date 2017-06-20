import { IAvia, ICarrier, IFlight, IGetCarriersSuccess, IGetFlightsSuccess } from 'models/avia';

export const GET_FLIGHTS = 'avia/GET_FLIGHTS';
export const GET_CARRIERS = 'avia/GET_CARRIERS';

const initialState: IAvia = {
    flights: [],
    carriers: []
};

export function aviaReducer(state: IAvia = initialState, action: Redux.Action) {
    switch (action.type) {
        case GET_CARRIERS:
            const {carriers} = action as IGetCarriersSuccess;
            return Object.assign({}, state, {carriers});
        case GET_FLIGHTS:
            const {flights} = action as IGetFlightsSuccess;
            return Object.assign({}, state, {flights});
        default:
            return state;
    }
}

export function getFlightsSuccess(flights: IFlight[]): IGetFlightsSuccess {
    return {
        type: GET_FLIGHTS,
        flights
    };
}

export function getCarriersSuccess(carriers: ICarrier[]): IGetCarriersSuccess {
    return {
        type: GET_CARRIERS,
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
            return {
                name: flight.carrier
            };
        }).filter((elem, pos, arr) => {
            return arr.indexOf(elem) === pos;
        });
        dispatch(getCarriersSuccess(carriers));
    };
}
