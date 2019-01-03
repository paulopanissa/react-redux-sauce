import { createStore, applyMiddleware, compose } from 'redux';

export default (rootReducer?: any) => {
    const middleware: any[] = [];
    const enchancers: any[] = [];

    enchancers.push(applyMiddleware(...middleware));

    return createStore(rootReducer, compose(...enchancers));
}