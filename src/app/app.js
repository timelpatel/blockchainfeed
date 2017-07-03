import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store.js'
import Header from './components/Header/index.jsx'
import ExchangeRate from './components/ExchangeRate/index.jsx'


const App = () => (
    <div>
        <Header />
        <ExchangeRate />
    </div>
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
