import ReduxThunk from 'redux-thunk'
import axios from "axios"


export function fetchLitecoin() {

    return dispatch => {
        dispatch({type: "FETCH_LITECOIN"})

        axios.get('http://localhost:3030/_stub/ltc.json')
            .then((response) => {
                dispatch({
                    type: 'FETCH_LITECOIN_COMPLETE',
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_LITECOIN_ERROR',
                    payload: error
                })
            });
    }

}
