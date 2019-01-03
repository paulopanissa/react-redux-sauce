import React, { Component } from 'react';
import { connect } from 'react-redux';

import HelloAction from '../Redux/HelloRedux';

export interface Props {
    dispatch?: () => any,
    str: string,
    handlePressToHello?: () => any,
}

export interface State { }

class Hello extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }


    render(): React.ReactNode {
        const { handlePressToHello, str } = this.props;
        return (
            <div>
                <button className="btn btn-lg btn-primary"
                        onClick={handlePressToHello}>
                    Press to Hello
                </button>

                <br/>
                <h2>{ str }</h2>
            </div>
        )
    }
}

const mapStateToProps = (state: any) =>{
    return {
        str: state.hello.str
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        handlePressToHello:  () => dispatch(HelloAction.handlePressToHello())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
