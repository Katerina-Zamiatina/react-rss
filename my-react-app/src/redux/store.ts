import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { movieApi } from './movieApi';
import formSlice from './formSlice';

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    middleware: () => getDefaultMiddleware().concat(movieApi.middleware),
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
