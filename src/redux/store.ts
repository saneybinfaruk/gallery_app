import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {gallaryApi} from './gallaryApi';
import {setupListeners} from '@reduxjs/toolkit/query';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import ItemQuery from './itemQuery';
import ThemeSlice from './ThemeSlice';
import FavoriteSlice from './FavoriteSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['themeSlice', 'favoritePhotos'],
};

const reducers = combineReducers({
  [gallaryApi.reducerPath]: gallaryApi.reducer,
  itemQuery: ItemQuery,
  themeSlice: ThemeSlice,
  favoritePhotos: FavoriteSlice,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistReducers,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      gallaryApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
