import { configureStore, combineReducers } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { movieApi } from './movieApi';
import formReducer from './formSlice';
import searchReducer from './searchSlice';

export const rootReducer = combineReducers({
  form: formReducer,
  search: searchReducer,
  [movieApi.reducerPath]: movieApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
  });
};

export type RootStoreType = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = RootStoreType['dispatch'];
