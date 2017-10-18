const app = (state = {
    currencyView: '',
    currencies: {
        'bitcoin': {
            code: 'btc',
            name: 'Bitcoin'
        },
        'ethereum': {
            code: 'eth',
            name: 'Ethereum'
        },
        'litecoin': {
            code: 'ltc',
            name: 'Litecoin'
        }
    },
    moneyCode: 'usd',
    moneyCodes: ['gbp','usd']
}, action) => {

    switch (action.type) {
        case "SET_CURRENCY_VIEW":
            return {
                currencyView: action.currencyView
            }

        case "SET_MONEY_CODE":
            return {
                moneyCode: action.moneyCode
            }
    }

    return state
}


export default app
