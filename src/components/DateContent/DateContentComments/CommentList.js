import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMeetingComments } from "../../../store/comments-slice";
import classes from "./CommentList.module.css";
import MainComment from "./MainComment";

const CommentList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const commentList = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(getMeetingComments(id));
  }, [dispatch]);

  return (
    <Fragment>
      <div className={classes.total}>
        <span>댓글</span>
        <span>{commentList.total}</span>
      </div>
      {commentList.list.map((comment) => (
        <MainComment key={comment.commentNum} props={comment} />
      ))}
    </Fragment>
  );
};

export default CommentList;
