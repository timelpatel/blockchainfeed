import {combineReducers} from 'redux'
import BitcoinReducer from './bitcoin.js'

const allReducers = combineReducers({
    bitcoin: BitcoinReducer
});

export default allReducers
