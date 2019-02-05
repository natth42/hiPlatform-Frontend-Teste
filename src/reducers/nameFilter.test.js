import { nameFilterReducer } from './nameFilter'
import { SET_NAME_FILTER } from '../actions/types';

describe('nameFilterReducer reducer', () => {

    it('should return the initial state', () => {
        expect(nameFilterReducer(undefined, {})).toEqual('')
    })

    it('should handle SET_NAME_FILTER', () => {
        expect(
            nameFilterReducer([], {
                type: SET_NAME_FILTER,
                filter: {filter: 'Run the tests'}
            })
        ).toEqual({filter: 'Run the tests'})
    })

})