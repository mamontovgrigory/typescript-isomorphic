import * as React from 'react';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import { IFlight, ICarrier } from 'models/avia';
import { getFlights } from 'modules/avia/index';
import { FlightItem } from 'components';
const style = require('./style.css');

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
                <div className={style.select_wrapper}>
                    <select onChange={this.handleCarriersSelectChange}>
                        <option>Выберите компанию</option>
                        {carriers.map((c, index) => <option key={index} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
                <div className={style.content}>
                    {activeFlights.map((flight, index) => <FlightItem key={index} flight={flight}/>)}
                </div>
            </div>
        );
    }
}

export { Home }
