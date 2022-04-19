import {
  SAVE_DATA,
  REMOVE_DATA,
} from '../constants/action-types';
import _ from 'lodash';
import { useToast } from 'react-native-toast-notifications';

const initialState = {
  savedArticles: [],
};

export const getSavedArticlesSelector = (state) => ({...state.savedArticles});

// const isExist = (art, store) => {
//   for (let i = 0; i < store.length; i++) {
//     if (art.url == store[i].url) {
//       return true;
//     }
//   }
//   return false;
// }

const findData = (art, store) => {
  for (let i = 0; i < store.length; i++) {
    if (art.url == store[i].url) {
      return i;
    }
  }
  return -1;
}

const savedArticlesReducer = (state = initialState, action ) => {
  switch (action.type) {
    // case SAVE_DATA: {
    //   console.log('is exist ========= ', isExist(action.payload.article, state.savedArticles))
    //   if (isExist(action.payload.article, state.savedArticles)) {
    //     return {
    //       savedArticles: state.savedArticles
    //     };
    //   } else {
    //     return {
    //       savedArticles: [...state.savedArticles, action.payload.article]
    //     }
    //   }
    // }
    case SAVE_DATA: {
      return {
        savedArticles: [...state.savedArticles, action.payload.article]
      }
    }
    // case REMOVE_DATA: {
    //   const indexRM = findData(action.payload.article, state.savedArticles);
    //   if (indexRM != -1) {
    //     return {
    //       savedArticles: state.savedArticles.splice(indexRM, 1)
    //     };
    //   } else {
    //     savedArticles: state.savedArticles
    //   }
    // }
    case REMOVE_DATA: {
      const savedArticlesClone = _.cloneDeep(state.savedArticles);
      savedArticlesClone.splice(action.payload.index, 1)
      return {
        savedArticles: savedArticlesClone
      }
    }
    default: {
      return state;
    }
  }
};

export default savedArticlesReducer;

