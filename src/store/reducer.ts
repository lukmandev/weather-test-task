import { combineReducers, configureStore } from "@reduxjs/toolkit";

import citiesReducer from "./reducers/cities/reducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore();
