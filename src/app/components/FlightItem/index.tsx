import * as React from 'react';
import * as moment from 'moment';

import { IFlight } from 'models/avia';
const style = require('./style.css');

export const FlightItem = (props: { flight: IFlight }) => (
    <div className={style.FlightItem}>
        <h4 className={style.title}>{props.flight.carrier}</h4>
        <div className={style.text}>
            <h5>{props.flight.direction.from}<span> - </span>{props.flight.direction.to}</h5>
            <div>
                Туда, {moment(props.flight.arrival).format('DD.MM.YYYY')}
            </div>
            <div>
                <strong>
                    {moment(props.flight.arrival).format('HH:mm:ss')}
                    <span> - </span>
                    {moment(props.flight.departure).format('HH:mm:ss')}
                </strong>
            </div>
        </div>
    </div>
);
