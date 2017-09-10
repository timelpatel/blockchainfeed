export function setMoneyCode(moneyCode) {

    return dispatch => {
        dispatch ({
            type: 'SET_MONEY_CODE',
            moneyCode: moneyCode
        })
    }

}
