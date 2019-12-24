const API_KEY = 'DxWvWHrs81rCR5lGjzGkOm30rdNDJtyG';
const GEOHELPER_URL = 'http://geohelper.info/api/v1';
const methodsList = ['countries', 'cities'];

export const getResidenseUrl = ({
  method,
  filter = {},
  countryIso,
  limit = 20,
  page = 1,
}) => {
  if (!method || !methodsList.includes(method)) {
    throw new Error(`method is required and must be one of ${methodsList.join(', ')}`);
  }

  const paramsList = {
    apiKey: API_KEY,
    'locale[lang]': 'ru',
    'locale[fallbackLang]': 'en',
    'order[by]': 'name',
    'order[dir]': 'asc',
    'pagination[page]': page,
    'pagination[limit]': limit,
  };

  if (filter.name) {
    paramsList['filter[name]'] = filter.name;
  }

  if (filter.countryIso) {
    paramsList['filter[countryIso]'] = filter.countryIso;
  }

  const params = Object.entries(paramsList).map(([key, value]) => {
    return `${key}=${value}`;
  }).join('&');

  return `${GEOHELPER_URL}/${method}?${params}`;
};

/* http://geohelper.info/api/v1/countries
  ?apiKey=DxWvWHrs81rCR5lGjzGkOm30rdNDJtyG
  &locale[lang]=ru
  &locale[fallbackLang]=en
  &filter[name]=%D0%B0%D0%BD%D0%B3
  &order[by]=name
  &order[dir]=asc
*/

/*
http://geohelper.info/api/v1/cities
  ?apiKey=DxWvWHrs81rCR5lGjzGkOm30rdNDJtyG
  &filter[countryIso]=RU
  &filter[name]=%D0%BB%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B
  &order[by]=name
  &order[dir]=asc
  &locale[lang]=ru
  &locale[fallbackLang]=en
*/
