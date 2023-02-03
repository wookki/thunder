import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DateContentList from "../components/DateContent/DateContentList";
import HeaderContent from "../components/DateContent/HeaderContent";
import { convertedLocation } from "../lib/convertedLocation";
import { getMeetingPost } from "../store/post-actions/meetingpost-actions";
import PostCardUI from "../UI/PostCardUI";

const Home = () => {
  const dispatch = useDispatch();
  const { location } = useParams();
  const meetingList = useSelector((state) => state.post.list);
  useEffect(() => {
    dispatch(getMeetingPost(location));
  }, [location, dispatch]);

  let koreaLocation = convertedLocation(location);

  return (
    <Fragment>
      <PostCardUI>
        <HeaderContent location={koreaLocation} />
        <DateContentList postList={meetingList} />
      </PostCardUI>
    </Fragment>
  );
};

export default Home;
