import { favoriteReducer } from './favoriteReducer'
import { SET_FAVORITE } from '../actions/types';

describe('favoriteReducer reducer', () => {

    it('should return the initial state', () => {
        expect(favoriteReducer(undefined, {})).toEqual([])
    })

    it('should handle SET_FAVORITE', () => {
        expect(
            favoriteReducer([], {
                type: SET_FAVORITE,
                favoriteItem: {name: 'favorite item', id: 31561, favorite: true}
            })
        ).toEqual({
            name: 'favorite item', id: 31561, favorite: true
        })
    })

})