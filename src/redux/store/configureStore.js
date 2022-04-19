import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import loggingMiddleware from './middleware/logging';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'HD_News',
  storage: AsyncStorage,
  // storage: storage,
}

const configureStore = (initialState = {}) => {
  const middleware = applyMiddleware(thunk, loggingMiddleware);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const store = createStore(persistedReducer, initialState, middleware);
  const persister = persistStore(store, null);
  return { store, persister };
};

export default configureStore;