export interface IFlights {
    list: IFlightItem[];
}

export interface IFlightItem {
    id: number;
    direction: {
        from: string;
        to: string;
    };
    arrival: string;
    departure: string;
    carrier: string;
}
