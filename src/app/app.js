import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers/index.js'

import ExchangeRate from './components/ExchangeRate/index.jsx'



const store = createStore(allReducers);

const App = () => (
    <div>
        <h1>Blockchain</h1>
        <ExchangeRate />
    </div>
)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
