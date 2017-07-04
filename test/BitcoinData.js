import {assert} from 'chai'
import BitcoinData from '../src/app/containers/BitcoinData/index.jsx'


describe ('BitcoinData', () => {
    describe('bit'), () => {
        it('should not be null', () => {
            assert.isNotNull(BitcoinData, 'bit is null')
        })

        it('should be a number', () => {
            assert.typeOf(BitcoinData, 'number', 'bit is not a number')
        })
    }
})
