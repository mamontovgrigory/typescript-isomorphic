import * as React from 'react';
import { IFlight } from 'models/avia';

const style = require('./style.css');

export const FlightItem = (props: { flight: IFlight }) => (
    <div className={style.FlightItem}>
        <div>
            <h4>{props.flight.carrier}</h4>
            <div>{props.flight.direction.from} - {props.flight.direction.to}</div>
            <div>{props.flight.arrival} - {props.flight.departure}</div>
        </div>
    </div>
);
