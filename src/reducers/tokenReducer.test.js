import { tokenReducer } from './tokenReducer'
import { GET_TOKEN } from '../actions/types';

describe('tokenReducer reducer', () => {

    it('should return the initial state', () => {
        expect(tokenReducer(undefined, {})).toEqual([])
    })

    it('should handle GET_TOKEN', () => {
        expect(
            tokenReducer([], {
                type: GET_TOKEN,
                token: 'Run the tests'
            })
        ).toEqual('Run the tests')
    })

})