import classes from "./PostCardUI.module.css";

const PostCardUI = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default PostCardUI;
