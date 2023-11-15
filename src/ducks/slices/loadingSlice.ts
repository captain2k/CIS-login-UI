import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/ducks';

interface LoadingTypes {
  tableLoading: boolean;
  formLoading: boolean;
  selectLoading: boolean;
  drawerLoading: boolean
}

const initState: LoadingTypes = {
  tableLoading: false,
  formLoading: false,
  selectLoading: false,
  drawerLoading: false
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState: initState,
  reducers: {
    setTableLoading: (state, action) => {
      state.tableLoading = action.payload;
    },
    setFormLoading: (state, action) => {
      state.formLoading = action.payload;
    },
    setSelectLoading: (state, action) => {
      state.selectLoading = action.payload;
    },
    setDrawerLoading: (state, action) => {
      state.drawerLoading = action.payload;
    }
  }
});

export const { setTableLoading, setFormLoading, setSelectLoading, setDrawerLoading } = loadingSlice.actions;
export const tableLoadingState = (state: RootState) => state.loading.tableLoading;
export const formLoadingState = (state: RootState) => state.loading.formLoading;
export const selectLoadingState = (state: RootState) => state.loading.selectLoading;
export const drawerLoadingState = (state: RootState) => state.loading.drawerLoading;
export default loadingSlice.reducer;
