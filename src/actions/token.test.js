import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { tokenResponse, getToken } from './token';
import { GET_TOKEN } from './types';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should return token', () => {
        const token = '123'
        const expectedAction = {
            type: GET_TOKEN,
            token
        }
        expect(tokenResponse(token)).toEqual(expectedAction)
    })

    it('call getToken and dispach action GET_TOKEN', () => {
        const store = mockStore({})
        localStorage.setItem('token', JSON.stringify(123));

        store.dispatch(getToken())

        const actions = store.getActions()
        const expectedPayload = {
            type: GET_TOKEN,
            token: "123"
        }
        expect(actions).toEqual([expectedPayload])
    })

})