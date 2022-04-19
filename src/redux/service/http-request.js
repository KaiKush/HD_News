import gnews from '../../api/GNews';

const COUNTRIES = [
  'us',
  'au',
  'ca',
  'ch',
  'cn',
  'de',
  'eg',
  'es',
  'fr',
  'gb',
  'gr',
  'hk',
  'ie',
  'il',
  'in',
  'it',
  'jp',
  'nl',
  'no',
  'ru',
  'se',
  'sg',
  'tw',
  'ua',
];

const TOKEN = [
  '8900214ee4f82059b349e5f93a2270cf', // huy hd
  'f2a3ab7b7c58f0a2605f028ff60fa091', // hdh0003
  'e8046a2bc199753ce9a57b553327faf7', // hdh101101
  '4d8cb5578afbcfe15530b69f327ddfbe', // hdh202202
  '377054044d947171be4b0d6c5bad1746', // hdh303303
  'de37d7154140fa5b89a0e5a53fdab1b3', // hdh404404
]

const TOKEN_SELECTED = TOKEN[3]; 
export const topHeadlinesApi = async () => {
  const response = await gnews.get('/top-headlines', {
    params: {
      lang: 'en',
      token: TOKEN_SELECTED
    },
  });
  return response.data.articles;
};

export const loadArticlesApi = async (txtSearch, page) => {
  const response = await gnews.get('/search', {
    params: {
      lang: 'en',
      q: txtSearch,
      country: COUNTRIES[page],
      token: TOKEN_SELECTED
    },
  });
  return response.data.articles;
};
