const app = (state = {
    moneyCode: 'usd'
}, action) => {

    switch (action.type) {
        case "SET_MONEY_CODE":
            return {
                moneyCode: action.moneyCode
            }
    }

    return state
}


export default app
