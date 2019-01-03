import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus }  from '@fortawesome/free-solid-svg-icons'
library.add(faPlus, faMinus);

export interface Props {
    value: number,
    increment: () => any,
    decrement: () => any,
}

class Counter extends Component<Props, any> {
    constructor(props: any) {
        super(props);
    }


    render() {
        const { value, increment, decrement } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button
                            className="btn btn-lg btn-danger"
                            onClick={decrement}>
                                <FontAwesomeIcon icon="minus" transform={{ rotate: 42 }} />
                        </button>
                        <span> | </span>
                        <button
                            className="btn btn-lg btn-success"
                            onClick={increment}>
                                <FontAwesomeIcon icon="plus" transform={{ rotate: 142 }} />
                        </button>
                        <p>{ value }</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;
