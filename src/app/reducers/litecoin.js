function litecoin(state = {
    litecoin: {},
    isComplete: false,
    isError: false,
    isFetching: false
}, action) {

    switch (action.type) {
        case "FETCH_LITECOIN":
            return {
                ...state,
                isFetching: true,
                isComplete: false
           }

       case "FETCH_LITECOIN_ERROR":
           return {
               ...state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           }

        case "FETCH_LITECOIN_COMPLETE":
            return {
                ...state,
                isFetching: false,
                isComplete: true,
                litecoin: action.payload
            }

        default:
            return state
    }

}


export default litecoin
