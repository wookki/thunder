import { Fragment } from "react";
import SubContents from "./SubComments";
import classes from "./MainComment.module.css";
import { timeForToday } from "../../../lib/calculatedTime";
import { BsDot } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";

const MainComment = ({ props }) => {
  console.log(props);
  const filteredTime = timeForToday(props.auditAt);
  return (
    <Fragment>
      <div className={classes["main-comments"]}>
        <section className={classes["user-info"]}>
          <span>{props.userInfo.company}</span>
          <BsDot />
          <span>{props.userInfo.nickName}</span>
        </section>
        <section className={classes.content}>
          <span>{props.content}</span>
        </section>
        <section className={classes.counter}>
          <AiOutlineClockCircle />
          <span>{filteredTime}</span>
          <FiThumbsUp />
          <span>{props.likeCount}</span>
          <GoComment />
          <span>{props.subCommentCount}</span>
        </section>
        {props.subComments.map((subComment) => (
          <SubContents key={subComment.commentNum} props={subComment} />
        ))}
      </div>
    </Fragment>
  );
};

export default MainComment;
