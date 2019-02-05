import { alertReducer } from './alertReducer'
import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from '../actions/types';

describe('alertReducer reducer', () => {

    it('should return the initial state', () => {
        expect(alertReducer(undefined, {})).toEqual([])
    })

    it('should handle ALERT_SUCCESS', () => {
        expect(
            alertReducer([], {
                type: ALERT_SUCCESS,
                message: 'Run the tests'
            })
        ).toEqual({
            message: 'Run the tests',
            showMessage: true
        })
    })

    it('should handle ALERT_ERROR', () => {
        expect(
            alertReducer([], {
                type: ALERT_ERROR,
                message: 'Run the tests'
            })
        ).toEqual({
            message: 'Run the tests',
            showMessage: true
        })
    })

    it('should handle ALERT_CLEAR', () => {
        expect(
            alertReducer([], {
                type: ALERT_CLEAR
            })
        ).toEqual({
            showMessage: false
        })
    })

})