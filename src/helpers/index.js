import {
  includes,
  pipe,
  entries,
  filter,
  sortBy,
  slice,
} from 'lodash/fp';

export const sorting = {
  name: subString => data => {
    if (subString === '') {
      return data;
    }
    return filter(el => includes(subString, el.name))(data);
  },
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
  price_from: value => data => {
    if (!value) {
      return data;
    }
    return data.filter(el => {
      return el.price >= Number(value);
    });
  },
  price_to: value => data => {
    if (!value) {
      return data;
    }

    return data.filter(el => el.price <= Number(value));
  },
  with_image: () => data => data.filter(el => el.image),
  with_link: () => data => data.filter(el => el.link),
  pageSize: count => slice(0, count),
  currentPage: (num, pageSize) => slice((num - 1) * pageSize, ((num - 1) * pageSize) + pageSize),
  default: () => data => data,
};

/**
 * Возвращает массив функций для фильтации вишек
 * @param {Object} filters Объект с фильтрами, из формы. Ключ - имя поля, значение - значение поля
 * @returns Function
 */
export const getFiltersFuctions = filters => {
  const filtersArray = entries(filters);

  // TODO: порефакторить этот кусок, заменить map на reduce, кидать ворнинг если нет функции для фильтрации
  const filt = filtersArray.map(([name, value]) => {
    return sorting[name] ? sorting[name](value) : sorting.default();
  });

  return pipe(filt);
};
