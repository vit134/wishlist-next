import { set } from 'lodash/fp';
import {
  selectWishesData,
  selectWishesCount,
  selectFiltersString,
} from '../selectors';

const mockState = {
  userPage: {
    wishes: {
      isLoading: false,
      entities: {
        1: {
          id: 1,
        },
        2: {
          id: 2,
        },
      },
      result: [1, 2],
    },
    filters: {
      search: '',
      categories: 'phones',
      tags: '',
      date: 'asc',
      price: 'desc',
      pageSize: 10,
      currentPage: 1,
    },
  },
};

describe('user-by-id -> selectors', () => {
  describe('selectFiltersString', () => {
    it('should return correct filters string with some of filter is emty', () => {
      const string = selectFiltersString(mockState);
      expect(string).toBe('categories=phones;date=asc;price=desc;pageSize=10;currentPage=1');
    });

    it('should return correct filters string', () => {
      const state = set(['userPage', 'filters', 'search'], 'blabla')(mockState);

      const string = selectFiltersString(state);
      expect(string).toBe('search=blabla;categories=phones;date=asc;price=desc;pageSize=10;currentPage=1');
    });
  });

  describe('selectWishesData', () => {
    it('should return correct wishes array', () => {
      const string = selectWishesData(mockState);
      expect(string).toEqual([
        {
          id: 1,
        },
        {
          id: 2,
        },
      ]);
    });

    it('should return empty array if no data', () => {
      const state = set(['userPage', 'wishes', 'entities'], undefined)(mockState);

      const string = selectWishesData(state);
      expect(string).toEqual([]);
    });
  });

  describe('selectWishesCount', () => {
    it('should return correct wishes count', () => {
      const string = selectWishesCount(mockState);
      expect(string).toBe(2);
    });

    it('should return 0 if no data', () => {
      const state = set(['userPage', 'wishes', 'result'], [])(mockState);

      const string = selectWishesCount(state);
      expect(string).toEqual(0);
    });
  });
});
