function ethereum(state = {
    ethereum: {},
    isComplete: false,
    isError: false,
    isFetching: false
}, action) {

    switch (action.type) {
        case "FETCH_ETHEREUM":
            return Object.assign({
                state,
                isFetching: true,
                isComplete: false
           })
           break

       case "FETCH_ETHEREUM_ERROR":
           return Object.assign({
               state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           })
           break

        case "FETCH_ETHEREUM_COMPLETE":
            return Object.assign({
                state,
                isFetching: false,
                isComplete: true,
                ethereum: action.payload
            })
            break
    }

    return state
}


export default ethereum
