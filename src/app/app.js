import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom' // use BrowserRouter instead ???
import Routes from './routes.js'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import store from './store.js'
import Header from './components/Header/index.jsx'

const customHistory = createBrowserHistory()
const css = require('../../sass/base.scss')

const App = () => (
    <div>
        <Header />
        <Routes />
    </div>
)


ReactDOM.render(
    <Provider store={store}>
        <HashRouter history={customHistory}>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
