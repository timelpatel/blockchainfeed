import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes.js'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import store from './store.js'
import Header from './components/Header/index.jsx'


const customHistory = createBrowserHistory()

const App = () => (
    <div>
        <Header />
        <Routes />
    </div>
)


ReactDOM.render(
    <BrowserRouter history={customHistory}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);
