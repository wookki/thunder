import { useNavigate } from "react-router-dom";
import { timeForToday } from "../lib/calculatedTime";
import classes from "./SearchContentDetail.module.css";

const SearchContentDetail = (props) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/gangnam/${props.content.postNum}`);
  };
  const filteredPostDate = timeForToday(props.content.auditAt);
  return (
    <div className={classes.box} onClick={goToDetail}>
      <span>{props.content.title}</span>
      <span>{props.content.userInfo.nickName}</span>
      <span>{filteredPostDate}</span>
      <span>0</span>
    </div>
  );
};

export default SearchContentDetail;
