import axios from "axios";
import { postActions } from "../posts-slice";

export const getMeetingPost = (location, pageNum) => {
  return async (dispatch) => {
    const getMeetingData = async () => {
      const response = await axios({
        method: "get",
        url: `http://api-dev.theteampearl.com:8080/v1/data/posts/${location}?pageSize=10&pageNum=${pageNum}`,
        headers: {
          Authorization: "Bearer asdfzxcv",
          Accept: "application/json",
        },
      });
      const responseData = await response.data;
      if (response.error) {
        throw new Error("error");
      }
      return responseData;
    };
    try {
      const postData = await getMeetingData();
      dispatch(postActions.postReplace(postData));
    } catch (error) {
      console.log(error);
    }
  };
};
