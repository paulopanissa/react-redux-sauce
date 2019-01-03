import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../serviceWorker';
// import {Provider} from "react-redux";
import cfgStore from './store';
import Counter from './components/Counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

const store: any = cfgStore();

const render = () => ReactDOM.render(
        <Counter
            value={store.getState()}
            increment={ () => store.dispatch({ type: 'INCREMENT' }) }
            decrement={ () => store.dispatch({ type: 'DECREMENT' }) }
        />, document.getElementById('root'));


render();
store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
