import { useNavigate, useParams } from "react-router-dom";
import classes from "./DateContentDetail.module.css";
import { timeForToday } from "../../lib/calculatedTime";
// icons
import { AiOutlineEye } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { IconContext } from "react-icons";

const DateContentDetail = ({
  location,
  postNum,
  title,
  content,
  likeCount,
  commentCount,
  userInfo,
  auditAt,
}) => {
  const LowLocation = location.toLowerCase();
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/${LowLocation}/${postNum}`);
  };
  const postTime = timeForToday(auditAt);
  const filterdContent = content.slice(0, 70);
  return (
    <div className={classes["content-box"]} onClick={goToDetail}>
      <strong className={classes.title}>{title}</strong>
      <div className={classes.content}>{filterdContent}</div>
      <div className={classes["user-info"]}>
        <span>{userInfo.company || "무직"}</span>
        <span>{userInfo.nickName}</span>
      </div>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div className={classes.counter}>
          <AiOutlineEye />
          <span>9,234</span>
          <FiThumbsUp />
          <span>{likeCount}</span>
          <GoComment />
          <span>{commentCount}</span>
          <span className={classes["post-time"]}>{postTime}</span>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default DateContentDetail;
