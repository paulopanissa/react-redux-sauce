import React, { Component } from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle, faPlusCircle }  from '@fortawesome/free-solid-svg-icons'
library.add(faMinusCircle, faPlusCircle);

import CounterAction from '../Redux/CounterRedux';

export interface Props {
    dispatch?: () => any,
    value: number,
    increment: () => any,
    decrement: () => any
}

export interface State { }

class Counter extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }


    render(): React.ReactNode {
        const { value, increment, decrement } = this.props;
        const styles = {
            margin: 20
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button className="btn btn-lg btn-danger"
                                onClick={decrement}>
                            <FontAwesomeIcon icon="minus-circle"/>
                        </button>
                        <span className="display-4" style={ styles }>{ value }</span>
                        <button className="btn btn-lg btn-success"
                                onClick={increment}>
                            <FontAwesomeIcon icon="plus-circle"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) =>{
    return {
        value: state.counter.value
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        increment: () => dispatch(CounterAction.increment()),
        decrement: () => dispatch(CounterAction.decrement()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
