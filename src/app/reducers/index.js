import {combineReducers} from 'redux'
import AppReducer from './app'
import BitcoinReducer from './bitcoin'
import EthereumReducer from './ethereum'


const allReducers = combineReducers({
    app: AppReducer,
    bitcoin: BitcoinReducer,
    ethereum: EthereumReducer
})


export default allReducers
