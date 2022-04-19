import { combineReducers } from 'redux';
import articlesReducer from './articles';
import savedArticlesReducer from './saved';

const rootReducer = combineReducers({
  articles: articlesReducer,
  savedArticles: savedArticlesReducer,
});

export default rootReducer;