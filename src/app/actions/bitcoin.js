import ReduxThunk from 'redux-thunk'
import axios from "axios"


export function fetchBitcoin() {

    return dispatch => {
        dispatch({type: "FETCH_BITCOIN"});

        axios.get('http://localhost:3030/bitcoin-stats-static.json')
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
