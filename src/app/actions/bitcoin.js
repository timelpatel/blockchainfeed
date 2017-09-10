import ReduxThunk from 'redux-thunk'
import axios from "axios"


export function fetchBitcoin() {

    return dispatch => {
        dispatch({type: "FETCH_BITCOIN"})

        axios.get('http://localhost:3030/_stub/btc.json')
        // axios.get('http://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response) => {
                dispatch({
                    type: 'FETCH_BITCOIN_COMPLETE',
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_BITCOIN_ERROR',
                    payload: error
                })
            });
    }

}


export function fetchBitcoinHistorical() {

    return dispatch => {
        dispatch({type: "FETCH_BITCOIN_HISTORICAL"})

        axios.get('http://localhost:3030/_stub/bitcoin-historical-data-static.json')
        // axios.get('http://localhost:3030/_stub/bitcoin-historical-data-static.csv')
        // axios.get('http://api.coindesk.com/v1/bpi/historical/close.json?start=2017-01-01&end=2017-01-31')
            .then((response) => {
                dispatch({
                    type: 'FETCH_BITCOIN_HISTORICAL_COMPLETE',
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_BITCOIN_HISTORICAL_ERROR',
                    payload: error
                })
            });
    }

}
