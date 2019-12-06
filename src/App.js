import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/index.js';
import './App.css';
import Layout from './containers/Layout';



const App = () => {
    return(
        <Provider store={store}>
            <Layout />
        </Provider>

    )
}

export default App;
