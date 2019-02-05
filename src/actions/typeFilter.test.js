import { setFilterType } from './typeFilter';
import { SET_TYPE_FILTER } from './types';

describe('actions', () => {
    it('should set type filter', () => {
      const filter = 'artist'
      const expectedAction = {
        type: SET_TYPE_FILTER,
        filter
      }
      expect(setFilterType(filter)).toEqual(expectedAction)
    })

  })