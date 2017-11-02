function bitcoin(state = {
    bitcoin: {},
    bitcoinHistorical: {},
    isComplete: false,
    isError: false,
    isFetching: false
}, action) {

    switch (action.type) {
        case "FETCH_BITCOIN":
            return {
                ...state,
                isFetching: true,
                isComplete: false
           }

       case "FETCH_BITCOIN_ERROR":
           return {
               ...state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           }

        case "FETCH_BITCOIN_COMPLETE":
            return {
                ...state,
                isFetching: false,
                isComplete: true,
                bitcoin: action.payload
            }

        case "FETCH_BITCOIN_HISTORICAL":
            return {
                ...state,
                isFetching: true,
                isComplete: false
           }

       case "FETCH_BITCOIN_HISTORICAL_ERROR":
           return {
               ...state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           }

        case "FETCH_BITCOIN_HISTORICAL_COMPLETE":
            return {
                ...state,
                isFetching: false,
                isComplete: true,
                bitcoinHistorical: action.payload
            }

        default:
            return state
    }

}


export default bitcoin
