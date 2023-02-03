import DateContentDetail from "./DateContentDetail";
import classes from "./DateContentList.module.css";

const DateContentList = ({ postList }) => {
  return (
    <div className={classes["content-box"]}>
      {postList.map((item) => (
        <DateContentDetail
          key={item.postNum}
          id={item.id}
          title={item.title}
          content={item.content}
          likeCount={item.likeCount}
          commentCount={item.commentCount}
          userInfo={item.userInfo}
          location={item.location}
          postNum={item.postNum}
          auditAt={item.auditAt}
        />
      ))}
    </div>
  );
};

export default DateContentList;
