import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from '../Redux';
import Counter from "../Components/Counter";
// import Counter from '../Redux/Counter';

const store: any = createStore();

class App extends Component<any, any> {
    render() {

        return (
            <Provider store={store}>
                <Counter />
            </Provider>
        )
    }
}

export default App;