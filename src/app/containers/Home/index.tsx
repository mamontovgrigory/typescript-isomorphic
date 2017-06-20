import * as React from 'react';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

import { IAvia } from 'models/avia';
import { getFlights } from 'redux/modules/avia';
const style = require('./style.css');

interface IProps {
    avia: IAvia;
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
        avia: state.flights
    }),
    (dispatch) => ({
        getFlights: () => dispatch(getFlights())
    })
)
class Home extends React.Component<IProps, IState> {
    public render() {
        const {avia} = this.props;
        console.log(avia);
        return (
            <div className={style.Home}>
                <img src={require('./logo.svg')} width={48} height={48}/>
                <p>Hello!</p>
            </div>
        );
    }
}

export { Home }
