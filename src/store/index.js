import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./comments-slice";
import loadingSlice from "./loading-slice";
import locationSlice from "./location-slice";
import postSlice from "./posts-slice";

const store = configureStore({
  reducer: {
    post: postSlice.reducer,
    comments: commentsSlice.reducer,
    isLoading: loadingSlice.reducer,
    location: locationSlice.reducer,
  },
});

export default store;
