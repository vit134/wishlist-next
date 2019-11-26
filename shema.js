export const schema = {
  wishes: {
    data: {
      1: {
        id: 1,
        price: 100,
        category: 'phone',
        name: 'keke',
      },
      2: {
        id: 2,
        price: 200,
        category: 'comp',
        name: 'lol',
      },
      3: {
        id: 3,
        price: 300,
        category: 'comp',
        name: 'hui',
      },
    },
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
};
