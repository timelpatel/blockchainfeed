import {applyMiddleware, createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index.js'

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk)
    )
)

export default store
