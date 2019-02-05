import { setNameFilter } from './nameFilter';
import { SET_NAME_FILTER  } from './types';

describe('actions', () => {
    it('should set filter value to string received', () => {
      const filter = 'Test'
      const expectedAction = {
        type: SET_NAME_FILTER,
        filter
      }
      expect(setNameFilter(filter)).toEqual(expectedAction)
    })
  })