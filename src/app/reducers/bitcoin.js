export default function reducer(state={
    bitcoin: {},
    isComplete: false,
    isError: false,
    isFetching: false
}, action) {

    switch (action.type) {
        case "FETCH_BITCOIN":
            return Object.assign({
                state,
                isFetching: true,
                isComplete: false
           })
           break;

       case "FETCH_BITCOIN_ERROR":
           return Object.assign({
               state,
               isFetching: false,
               isComplete: false,
               isError: action.payload
           })
           break;

        case "FETCH_BITCOIN_COMPLETE":
            return Object.assign({
                state,
                isFetching: false,
                isComplete: true,
                bitcoin: action.payload
            })
            break;
    }

    return state
}
