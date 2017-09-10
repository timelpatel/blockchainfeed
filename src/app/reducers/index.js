import {combineReducers} from 'redux'
import AppReducer from './app'
import BitcoinReducer from './bitcoin'
import EthereumReducer from './ethereum'
import LitecoinReducer from './litecoin'


const allReducers = combineReducers({
    app: AppReducer,
    bitcoin: BitcoinReducer,
    ethereum: EthereumReducer,
    litecoin: LitecoinReducer
})


export default allReducers
