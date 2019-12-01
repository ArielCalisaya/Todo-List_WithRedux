import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './components/List';
import InputFilter from './components/TodoInput&Filter';
import './App.css';

const App = () => {
    return(
        <Provider store={store}>
            <main className="lg:bg-gray-800 bg-gray-900 items-center flex-col flex  text-center justify-center text-xl" >
                <h1 className="text-4xl text-white pt-8 pb-6 ">Todo App</h1>
                <InputFilter />
                <List/>
            </main>
        </Provider>

    )
}

export default App;
