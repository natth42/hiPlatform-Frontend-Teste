import { setLoading } from './loading';
import { SET_LOADING } from './types';

describe('actions', () => {
    it('should set loading to true', () => {
        const loading = true
        const expectedAction = {
            type: SET_LOADING,
            loading
        }
        expect(setLoading(loading)).toEqual(expectedAction)
    })

    it('should set loading to false', () => {
        const loading = false
        const expectedAction = {
            type: SET_LOADING,
            loading
        }
        expect(setLoading(loading)).toEqual(expectedAction)
    })

})