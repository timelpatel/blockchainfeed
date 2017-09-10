function litecoin(state = {
    litecoin: {},
    isComplete: false,
    isError: false,
    isFetching: false
}, action) {

    switch (action.type) {
        case "FETCH_LITECOIN":
            return Object.assign({
                state,
                isFetching: true,
                isComplete: false
           })
           break

       case "FETCH_LITECOIN_ERROR":
           return Object.assign({
               state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           })
           break

        case "FETCH_LITECOIN_COMPLETE":
            return Object.assign({
                state,
                isFetching: false,
                isComplete: true,
                litecoin: action.payload
            })
            break
    }

    return state
}


export default litecoin
