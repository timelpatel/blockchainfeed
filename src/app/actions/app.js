export function setCurrencyView(currencyView) {

    return dispatch => {
        dispatch ({
            type: 'SET_CURRENCY_VIEW',
            currencyView: currencyView
        })
    }

}

export function setMoneyCode(moneyCode) {

    return dispatch => {
        dispatch ({
            type: 'SET_MONEY_CODE',
            moneyCode: moneyCode
        })
    }

}
