import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './components/list';

import './App.css';

const App = () => (
    <Provider store={store}>
        <main>
            <h1>Todo App Main App z-initial</h1>
            <List/>
        </main>
    </Provider>
)

export default App;
