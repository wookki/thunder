import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  location: [],
};

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    locationReducer(state, action) {
      state.location = action.payload;
    },
  },
});

export const getLocation = () => {
  return async (dispatch) => {
    const fetchLocation = async () => {
      const response = await axios({
        method: "get",
        url: "http://api-dev.theteampearl.com:8080/v1/data/location",
        headers: {
          Authorization: "Bearer asdfzxcv",
        },
      });
      const responseData = await response.data;
      return responseData;
    };
    try {
      const data = await fetchLocation();
      dispatch(locationActions.locationReducer(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const locationActions = locationSlice.actions;
export default locationSlice;
