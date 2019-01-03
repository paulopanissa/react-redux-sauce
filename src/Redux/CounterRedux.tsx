import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
    increment: null,
    decrement: null
});

export const CounterTypes = Types;
export default Creators

// Reducers
export const INITIAL_STATE = Immutable({
    value: 0
});

export const increment = (state: any) => {
    return state.merge({ value: state.value + 1 })
};
export const decrement = (state: any) => {
    if (state.value === 0) {
        return state.merge({ value:  0 })
    }
    return state.merge({ value: state.value - 1 })
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.INCREMENT]: increment,
    [Types.DECREMENT]: decrement
});
