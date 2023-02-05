import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: { total: 0, list: [] },
  reducers: {
    postReplace(state, action) {
      state.total = action.payload.total;
      state.list = action.payload.list;
      // state.list.push(action.payload.list);
    },
  },
});

export const postActions = postSlice.actions;
export default postSlice;
