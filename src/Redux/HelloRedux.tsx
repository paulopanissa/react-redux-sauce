import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
    handlePressToHello: null
});
export const HelloTypes = Types;
export default Creators

// Reducers
export const INITIAL_STATE = Immutable({
    str: null
});

export const sayHello = (state: any) => {
    return state.merge({ str: 'Hello Redux Sauce from Immutable {data}'});
    // return {...state, str: 'Hello ReduxSauce'}
};

export const reducer = createReducer(INITIAL_STATE, {
    [Types.HANDLE_PRESS_TO_HELLO]: sayHello
});
