import { successAlert, errorAlert, clearAlert } from './alert';
import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './types';

describe('actions', () => {
    it('should create an action to display success alert', () => {
        const message = 'Success test'
        const expectedAction = {
            type: ALERT_SUCCESS,
            message
        }
        expect(successAlert(message)).toEqual(expectedAction)
    })

    it('should create an action to display error alert', () => {
        const message = 'Failed test'
        const expectedAction = {
            type: ALERT_ERROR,
            message
        }
        expect(errorAlert(message)).toEqual(expectedAction)
    })

    it('should create an action to clear alert', () => {
        const expectedAction = {
            type: ALERT_CLEAR
        }
        expect(clearAlert()).toEqual(expectedAction)
    })
})