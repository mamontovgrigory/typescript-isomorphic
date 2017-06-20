export interface IAvia {
    flights: IFlight[];
    carriers: ICarrier[];
}

export interface ICarrier {
    name: string;
}

export interface IFlight {
    id: number;
    direction: {
        from: string;
        to: string;
    };
    arrival: string;
    departure: string;
    carrier: string;
}

export interface IGetCarriersSuccess extends Redux.Action {
    carriers: ICarrier[];
}

export interface IGetFlightsSuccess extends Redux.Action {
    flights: IFlight[];
}
