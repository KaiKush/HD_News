import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_MORE_DATA_SUCCESS,
  FETCH_TOP_DATA,
  CLEAR_DATA,
} from '../constants/action-types';

import { loadArticlesApi, topHeadlinesApi } from '../service/http-request';

const clearData = () => ({
  type: CLEAR_DATA,
  payload: {}
})

const fetchDataError = () => ({
  type: FETCH_DATA_ERROR,
  payload: {},
});

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
  payload: {isLoading: true},
});

const fetchDataSuccess = (articles) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {articles},
});

const fetchMoreDataSuccess = (articles) => ({
  type: FETCH_MORE_DATA_SUCCESS,
  payload: {articles},
});

const fetchTopData = (topHeadlines) => ({
  type: FETCH_TOP_DATA,
  payload: {topHeadlines},
});

export const fetchData = (txtSearch, isLoadMore = false, page = 0) => (
  (dispatch) => {
    dispatch(fetchDataRequest());
    return loadArticlesApi(txtSearch == '' ? 'news' : txtSearch, page)
    .then((articles) => {
      if (isLoadMore) {
        dispatch(fetchMoreDataSuccess(articles));
      } else {
        dispatch(clearData());
        dispatch(fetchDataSuccess(articles));
      }
    })
    .catch((err) => {
      console.log(`Error load data: ${err}`);
      dispatch(fetchDataError());
    })
  }
);

export const fetchTopTenData = () => (
  (dispatch) => {
    return topHeadlinesApi()
    .then((topHeadlines) => {
      dispatch(fetchTopData(topHeadlines))
    })
    .catch((err) => console.log(`Error load top 10 data: ${err}`))
  }
);