import { typeFilterReducer } from './typeFilterReducer'
import { SET_TYPE_FILTER } from '../actions/types';

describe('typeFilterReducer reducer', () => {

    it('should return the initial state', () => {
        expect(typeFilterReducer(undefined, {})).toEqual('artist')
    })

    it('should handle SET_TYPE_FILTER', () => {
        expect(
            typeFilterReducer([], {
                type: SET_TYPE_FILTER,
                filter: 'album'
            })
        ).toEqual('album')
    })

})