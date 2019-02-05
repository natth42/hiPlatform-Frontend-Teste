import { loadingReducer } from './loadingReduce'
import { SET_LOADING } from '../actions/types';

describe('loadingReducer reducer', () => {

    it('should return the initial state', () => {
        expect(loadingReducer(undefined, {})).toEqual(false)
    })

    it('should handle SET_LOADING', () => {
        expect(
            loadingReducer([], {
                type: SET_LOADING,
                loading: true
            })
        ).toEqual(true)
    })

})