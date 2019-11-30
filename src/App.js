import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './components/list';

import './App.css';

const App = () => {
    return(
        <Provider store={store}>
            <main className="bg-gray-800 items-center flex-col flex  text-center justify-center text-xl" >
                <h1 className="text-4xl text-white pt-8">Todo App Main App z-initial</h1>
                <List/>
            </main>
        </Provider>

    )
}

export default App;
