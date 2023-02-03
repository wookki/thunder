import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: false },
  reducers: {
    isLoading(state) {
      state.loading = true;
    },
    isNotLoading(state) {
      state.loading = false;
    },
  },
});

export const loadingActions = loadingSlice.actions;
export default loadingSlice;
