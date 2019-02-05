import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setFavoriteItem, setUnfavoriteItem, setFavorite, setUnfavorite } from './favorite';
import { SET_FAVORITE, SET_UNFAVORITE } from './types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should create an action to set item to favorite', () => {
      const favoriteItem = {name: 'item test', id: 51651, favorite: true}
      const expectedAction = {
        type: SET_FAVORITE,
        favoriteItem
      }
      expect(setFavorite(favoriteItem)).toEqual(expectedAction)
    })

    it('should create an action to unfavorite item', () => {
        const unfavoriteItem = {name: 'item test', id: 51651, favorite: true}
        const expectedAction = {
          type: SET_UNFAVORITE,
          unfavoriteItem
        }
        expect(setUnfavorite(unfavoriteItem)).toEqual(expectedAction)
    })

    it('call setFavoriteItem and dispach action SET_FAVORITE', () => {
        const store = mockStore({})
        store.dispatch(setFavoriteItem('test', {name: 'item test', id: 51651, favorite: true}))

        const actions = store.getActions()
        const expectedPayload = { 
            type: SET_FAVORITE,
            favoriteItem: {name: 'item test', id: 51651, favorite: true}
        }
        expect(actions).toEqual([expectedPayload])
      })

      it('call setUnfavoriteItem and dispach action SET_UNFAVORITE', () => {
        const store = mockStore({})
        store.dispatch(setUnfavoriteItem('test', {name: 'item test', id: 51651, favorite: true}))

        const actions = store.getActions()
        const expectedPayload = { 
            type: SET_UNFAVORITE,
            unfavoriteItem: {name: 'item test', id: 51651, favorite: true}
        }
        expect(actions).toEqual([expectedPayload])
      })

  })