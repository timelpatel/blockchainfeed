import {assert} from 'chai'
import EthereumData from '../src/app/containers/EthereumData/index.jsx'


describe ('EthereumData', function() {
    it('should not be null', function(){
        assert.isNotNull(EthereumData, 'EthereumData is null')
    })

    it('should be a number', function(){
        assert.typeOf(EthereumData, 'number', 'Ethereum data is not loading from API')
    })
})




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
