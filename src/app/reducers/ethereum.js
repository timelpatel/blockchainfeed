function ethereum(state = {
    ethereum: {},
    isComplete: false,
    isError: false,
    isFetching: false
}, action) {

    switch (action.type) {
        case "FETCH_ETHEREUM":
            return {
                ...state,
                isFetching: true,
                isComplete: false
           }

       case "FETCH_ETHEREUM_ERROR":
           return {
               ...state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           }

        case "FETCH_ETHEREUM_COMPLETE":
            return {
                ...state,
                isFetching: false,
                isComplete: true,
                ethereum: action.payload
            }

        default:
            return state
    }

}


export default ethereum
