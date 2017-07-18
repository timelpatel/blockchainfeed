import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index.js'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for Chrome Redux DevTools
    )
)

export default store
