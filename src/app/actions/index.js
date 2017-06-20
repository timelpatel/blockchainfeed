// Example of an action - not currently required
export const selectBlockchain = (currencyCode) => {
    return {
        type: "CURRENCY_SELECTED",
        payload: currencyCode
    }
}


// new file stuff
export default function (state=null, action) {
    switch(action.type) {
        case "CURRENCY_SELECTED":
            return action.payload;
            break;
    }
    return state
}
