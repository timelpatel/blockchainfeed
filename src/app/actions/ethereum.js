import ReduxThunk from 'redux-thunk'
import axios from "axios"


export function fetchEthereum() {

    return dispatch => {
        dispatch({type: "FETCH_ETHEREUM"})

        axios.get('http://localhost:3030/_stub/eth.json')
        // axios.get('https://coinmarketcap-nexuist.rhcloud.com/api/eth')
            .then((response) => {
                dispatch({
                    type: 'FETCH_ETHEREUM_COMPLETE',
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_ETHEREUM_ERROR',
                    payload: error
                })
            });
    }

}
