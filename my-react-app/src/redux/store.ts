import { configureStore } from '@reduxjs/toolkit';

import { movieApi } from './movieApi';
import formReducer from './formSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    search: searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootStoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
