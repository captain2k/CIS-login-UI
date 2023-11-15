import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas/rootSaga';
import FiltersReducer from '@/ducks/slices/Filters';
import SalesReportReducer from '@/ducks/slices/SalesReport';
import { authSlice, commissionReportSlice, ReceptionReportSlice, loadingSlice, pdfSlice } from './slices';
import routeStore from './keys';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import RisReportReducer from './slices/RisReport';
import LisReportReducer from './slices/LisReport';
import PharmacyReportReducer from "@/ducks/slices/PharmacyReport";
import CommissionReducer from './slices/CommisionReport';

const reducer = combineReducers({
  auth: authSlice,
  loading: loadingSlice,
  [routeStore.pdf]: pdfSlice,
  Filters: FiltersReducer,
  [routeStore.commissionReport]: commissionReportSlice,
  [routeStore.receptionReport]: ReceptionReportSlice,
  salesReport: SalesReportReducer,
  risReport: RisReportReducer,
  lisReport: LisReportReducer,
  pharmacyReport: PharmacyReportReducer,
  commissionReport: CommissionReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false
    }),
    sagaMiddleware
  ]
});

export const useDispatch: () => AppDispatch = useReduxDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
