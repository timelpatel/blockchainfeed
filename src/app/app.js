import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store.js'
import Header from './components/Header/index.jsx'
import ExchangeRates from './components/ExchangeRates/index.jsx'


const App = () => (
    <div>
        <Header />
        <ExchangeRates />
    </div>
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
