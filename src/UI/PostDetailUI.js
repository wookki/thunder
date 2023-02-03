import classes from "./PostDetailUI.module.css";

const PostDetailUI = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default PostDetailUI;
