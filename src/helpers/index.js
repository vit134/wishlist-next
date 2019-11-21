import {
  includes,
  filter,
  sortBy,
  slice,
} from 'lodash/fp';

export const sorting = {
  name: subString => filter(el => includes(subString, el.name)),
  categories: category => data => {
    if (!category) {
      return data;
    }
    return filter(el => el.categories === category)(data);
  },
  tags: tag => data => {
    if (!tag) {
      return data;
    }
    return filter(el => el.tags === tag)(data);
  },
  date: type => {
    if (type === 'asc') {
      return sortBy('date');
    }

    return data => data.sort((a, b) => b.date - a.date);
  },
  price: type => {
    if (type === 'asc') {
      return sortBy('price');
    }

    return data => data.sort((a, b) => b.price - a.price);
  },
  pageSize: count => slice(0, count),
  currentPage: (num, pageSize) => slice((num - 1) * pageSize, ((num - 1) * pageSize) + pageSize)
};
