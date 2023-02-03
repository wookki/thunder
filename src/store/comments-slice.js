import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadingActions } from "./loading-slice";

const commentsSlice = createSlice({
  name: "comments",
  initialState: { total: 0, list: [], isLoading: false },
  reducers: {
    commentsReplace(state, action) {
      state.total = action.payload.total;
      state.list = action.payload.list;
    },
  },
});

export const getMeetingComments = (postNum) => {
  return async (dispatch) => {
    dispatch(loadingActions.isLoading());
    const getCommentsData = async () => {
      const response = await axios({
        method: "GET",
        url: `http://api-dev.theteampearl.com:8080/v1/data/post/${postNum}/comments`,
        headers: {
          Authorization: "Bearer asdfzxcv",
          Accept: "application/json",
        },
      });
      const data = await response.data;
      return data;
    };
    try {
      const commentsData = await getCommentsData();
      dispatch(commentsActions.commentsReplace(commentsData));
      dispatch(loadingActions.isNotLoading());
    } catch (error) {
      console.log(error);
    }
  };
};

export const commentsActions = commentsSlice.actions;
export default commentsSlice;
