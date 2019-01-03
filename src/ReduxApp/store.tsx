import { createStore } from 'redux';
import counterReducer from "./reducers/Counter";

export default () => {
    return createStore(
        counterReducer
    )
}