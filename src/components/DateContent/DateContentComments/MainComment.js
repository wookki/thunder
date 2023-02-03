import { Fragment } from "react";
import SubContents from "./SubComments";

const MainComment = ({ props }) => {
  return (
    <Fragment>
      <div>
        <p>{props.auditAt}</p>
        <p>{props.commentNum}</p>
        <p>{props.content}</p>
        {props.subComments.map((subComment) => (
          <SubContents key={subComment.commentNum} props={subComment} />
        ))}
      </div>
    </Fragment>
  );
};

export default MainComment;
