import {combineReducers} from 'redux'
import BitcoinReducer from './bitcoin.js'
import EthereumReducer from './ethereum.js'


const allReducers = combineReducers({
    bitcoin: BitcoinReducer,
    ethereum: EthereumReducer
});

export default allReducers
