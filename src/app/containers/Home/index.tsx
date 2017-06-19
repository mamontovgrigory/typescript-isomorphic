import * as React from 'react';
const {connect} = require('react-redux');

import { IFlights } from 'models/flights';
const style = require('./style.css');

interface IProps {
    flights: IFlights;
}

@connect(
    (state) => ({
        flights: state.flights,
    }),
)
class Home extends React.Component<IProps, any> {
    public render() {
        const {flights} = this.props;
        console.log(flights);
        return (
            <div className={style.Home}>
                <img src={require('./logo.svg')} width={48} height={48}/>
                <p>Hello!</p>
            </div>
        );
    }
}

export { Home }
