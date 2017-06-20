import * as React from 'react';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import { IFlight, ICarrier } from 'models/avia';
import { getFlights } from 'modules/avia/index';
const style = require('./style.css');

const CarrierOption = (props: { carrier: ICarrier }) => (
    <option value={props.carrier.name}>{props.carrier.name}</option>
);

const FlightItem = (props: { flight: IFlight }) => (
    <div>
        <h3>{props.flight.direction.from} - {props.flight.direction.to}</h3>
        <p>{props.flight.arrival} - {props.flight.departure}</p>
        <p>{props.flight.carrier}</p>
        <br/>
    </div>
);

interface IProps {
    flights: IFlight[];
    carriers: ICarrier[];
}

interface IState {
    activeFlights: IFlight[];
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
    constructor(props) {
        super(props);
        this.handleCarriersSelectChange = this.handleCarriersSelectChange.bind(this);
        this.state = {
            activeFlights: []
        };
    }

    private handleCarriersSelectChange(e) {
        const {flights} = this.props;
        const activeFlights = flights.filter((flight) => {
            return flight.carrier === e.target.value;
        });
        this.setState({
            activeFlights
        });
    }

    public render() {
        const {carriers} = this.props;
        const {activeFlights} = this.state;
        return (
            <div className={style.Home}>
                <img src={require('./logo.svg')} width={48} height={48}/>
                <p>Hello!</p>
                <div>
                    <select onChange={this.handleCarriersSelectChange}>
                        {carriers.map((carrier, index) => <CarrierOption key={index} carrier={carrier}/>)}
                    </select>
                </div>
                <div>
                    {activeFlights.map((flight, index) => <FlightItem key={index} flight={flight}/>)}
                </div>
            </div>
        );
    }
}

export { Home }
