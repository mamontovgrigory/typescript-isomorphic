import * as React from 'react';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import { IFlight, ICarrier, IGetFlightsSuccess } from 'models/avia';
import { getFlights } from 'modules/avia/index';
const style = require('./style.css');

interface IProps {
    flights: IFlight[];
    carriers: ICarrier[];
    getFlights: Redux.ActionCreator<IGetFlightsSuccess>;
}

interface IState {

}

@asyncConnect([{
    promise: ({store: {dispatch}}) => {
        return dispatch(getFlights());
    }
}])
@connect(
    (state) => ({
        flights: state.avia.flights,
        carriers: state.avia.carriers
    })
)
class Home extends React.Component<IProps, IState> {
    public render() {
        return (
            <div className={style.Home}>
                <img src={require('./logo.svg')} width={48} height={48}/>
                <p>Hello!</p>
            </div>
        );
    }
}

export { Home }
