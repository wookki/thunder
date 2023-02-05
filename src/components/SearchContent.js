import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMeetingPost } from "../store/post-actions/meetingpost-actions";
import PostCardUI from "../UI/PostCardUI";
import SearchContentDetail from "./SearchContentDetail";
import classes from "./SearchContent.module.css";

const SearchContent = () => {
  const dispatch = useDispatch();
  const contentList = useSelector((state) => state.post.list);
  const [searchParams, setSearchParams] = useSearchParams();
  const results = searchParams.get("results");
  const filteredContentList = useCallback(
    contentList.filter(
      (content) =>
        content.title.includes(results) || content.content.includes(results)
    ),
    [contentList, results]
  );
  console.log(filteredContentList);
  useEffect(() => {
    dispatch(getMeetingPost("gangnam"));
  }, []);
  return (
    <PostCardUI>
      <h1>강남</h1>
      <header className={classes.header}>
        <div>제목</div>
        <div>작성자</div>
        <div>작성일</div>
        <div>조회</div>
      </header>
      {filteredContentList.map((content) => (
        <SearchContentDetail key={content.postNum} content={content} />
      ))}
    </PostCardUI>
  );
};

export default SearchContent;
