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
        case 'SET_CURRENCY_VIEW':
            return {
                ...state,
                currencyView: action.currencyView
            }

        case 'SET_MONEY_CODE':
            return {
                ...state,
                moneyCode: action.moneyCode
            }

        default:
            return state
    }
}


export default app
