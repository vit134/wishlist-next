import { sorting } from '.';

describe('sorting', () => {
  const mockData = [
    {
      name: 'hui',
      categories: 'phone',
      tags: 'kek'
    },
    {
      name: 'kek',
      categories: 'comp'
    },
    {
      name: 'blabla',
      categories: 'phone'
    },
  ];

  describe('name', () => {
    it('should return correct data if name was found', () => {
      expect(sorting.name('bla')(mockData)).toEqual([
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);
    });

    it('should return correct data if name was not found', () => {
      expect(sorting.name('lol')(mockData)).toEqual([]);
    });
  });

  describe('categories', () => {
    it('should return correct data', () => {
      expect(sorting.categories('phone')(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);
    });

    it('should return correct data if category was not found', () => {
      expect(sorting.categories('lol')(mockData)).toEqual([]);
    });

    it('should return correct data if category is empty', () => {
      expect(sorting.categories('')(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'kek',
          categories: 'comp'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);
    });

    it('should return correct data if category is null or undefined', () => {
      expect(sorting.categories(null)(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'kek',
          categories: 'comp'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);

      expect(sorting.categories(undefined)(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'kek',
          categories: 'comp'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);
    });
  });

  describe('tags', () => {
    it('should return correct data', () => {
      expect(sorting.tags('kek')(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
      ]);
    });

    it('should return correct data if tag was not found', () => {
      expect(sorting.tags('lol')(mockData)).toEqual([]);
    });

    it('should return correct data if tag is empty', () => {
      expect(sorting.tags('')(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'kek',
          categories: 'comp'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);
    });

    it('should return correct data if tag is null or undefined', () => {
      expect(sorting.tags(null)(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'kek',
          categories: 'comp'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);

      expect(sorting.tags(undefined)(mockData)).toEqual([
        {
          name: 'hui',
          categories: 'phone',
          tags: 'kek'
        },
        {
          name: 'kek',
          categories: 'comp'
        },
        {
          name: 'blabla',
          categories: 'phone'
        },
      ]);
    });
  });

  describe('price', () => {
    it('should sort by price from bigger to smaller', () => {
      const data = [
        {
          price: 1
        },
        {
          price: 3
        },
        {
          price: 2
        },
      ];

      expect(sorting.price('asc')(data)).toEqual([
        {
          price: 1
        },
        {
          price: 2
        },
        {
          price: 3
        },
      ]);
    });

    it('should sort by price from smaller to bigger', () => {
      const data = [
        {
          price: 1
        },
        {
          price: 3
        },
        {
          price: 2
        },
      ];

      expect(sorting.price('desc')(data)).toEqual([
        {
          price: 3
        },
        {
          price: 2
        },
        {
          price: 1
        },
      ]);
    });
  });

  describe('date', () => {
    it('should sort by date from bigger to smaller', () => {
      const data = [
        {
          date: 1
        },
        {
          date: 3
        },
        {
          date: 2
        },
      ];

      expect(sorting.date('asc')(data)).toEqual([
        {
          date: 1
        },
        {
          date: 2
        },
        {
          date: 3
        },
      ]);
    });

    it('should sort by date from smaller to bigger', () => {
      const data = [
        {
          date: 1
        },
        {
          date: 3
        },
        {
          date: 2
        },
      ];

      expect(sorting.date('desc')(data)).toEqual([
        {
          date: 3
        },
        {
          date: 2
        },
        {
          date: 1
        },
      ]);
    });
  });

  describe('pageSize', () => {
    it('should return only 2 items', () => {
      const data = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
      ];
      expect(sorting.pageSize(2)(data)).toEqual([
        {
          id: 1
        },
        {
          id: 2
        },
      ]);
    });
  });

  describe('currentPage', () => {
    it('should return first 2 items if pageSize is 2 and currentPage is 1', () => {
      const data = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
      ];
      expect(sorting.currentPage(1, 2)(data)).toEqual([
        {
          id: 1
        },
        {
          id: 2
        },
      ]);
    });

    it('should return correct data if pageSize is 2 and currentPage is 2', () => {
      const data = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
      ];
      expect(sorting.currentPage(2, 2)(data)).toEqual([
        {
          id: 3
        },
        {
          id: 4
        },
      ]);
    });

    it('should return last 1 item if pageSize is 2 and currentPage is 3', () => {
      const data = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
      ];
      expect(sorting.currentPage(3, 2)(data)).toEqual([
        {
          id: 5
        },
      ]);
    });
  });
});
