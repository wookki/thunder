import { Fragment, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
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
  const [ref, inView] = useInView();

  let pageNum = useRef(1).current;
  let observerTargetEl = useRef(null);

  const meetingList = useSelector((state) => state.post.list);
  let koreaLocation = convertedLocation(location);

  // useEffect(() => {
  //   if (!observerTargetEl.current) return;
  //   const io = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       dispatch(getMeetingPost(location, pageNum));
  //       console.log(pageNum);
  //       pageNum++;
  //     }
  //   });
  //   io.observe(observerTargetEl.current);
  //   return () => {
  //     io.disconnect();
  //   };
  // }, [location, dispatch, observerTargetEl]);

  useEffect(() => {
    if (inView) {
    }
  }, []);
  return (
    <Fragment>
      <PostCardUI>
        <HeaderContent location={koreaLocation} />
        <DateContentList postList={meetingList} />
        <div ref={ref} />
      </PostCardUI>
    </Fragment>
  );
};

export default Home;
