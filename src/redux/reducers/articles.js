import {
  CLEAR_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_MORE_DATA_SUCCESS,
  FETCH_TOP_DATA,
} from '../constants/action-types';

const initialState = {
  articles: [],
  topHeadlines: [],
  isLoading: false,
};
export const getArticlesSelector = (state) => ({ ...state.articles });

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_DATA: {
      return {
        isLoading: state.isLoading,
        articles: [],
        topHeadlines: state.topHeadlines,
      }
    }
    case FETCH_DATA_ERROR: {
      return {
        isLoading: false,
        articles: state.articles,
        topHeadlines: state.topHeadlines
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        articles: (state.articles.length > 0) ? state.articles : [],
        topHeadlines: state.topHeadlines
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        articles: action.payload.articles,
        topHeadlines: state.topHeadlines
      };
    }
    case FETCH_MORE_DATA_SUCCESS: {
      if (action.payload.articles !== undefined) {
        return {
          isLoading: false,
          articles: [...state.articles, ...action.payload.articles],
          topHeadlines: state.topHeadlines
        };
      } else {
        return {
          isLoading: false,
          articles: state.articles,
          topHeadlines: state.topHeadlines
        }
      }
    }
    case FETCH_TOP_DATA: {
      return {
        isLoading: state.isLoading,
        topHeadlines: action.payload.topHeadlines,
        articles: state.articles,
      };
    }
    default: {
      return state;
    }
  }
};

export default articlesReducer;