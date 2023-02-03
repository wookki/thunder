import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./SignModal.module.css";

import { IoMdClose } from "react-icons/io";

const BackDrop = (props) => {
  return <div onClick={props.onModal} className={classes["backdrop"]} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.header}>
        <span>로그인</span>
        <IoMdClose
          onClick={props.onModal}
          size={25}
          className={classes.close}
        />
      </div>
      <form className={classes.form}>
        <input placeholder="Enter your Email" />
        <input placeholder="Password" />
        <button>로그인</button>
      </form>
      <div className={classes["social-login"]}>
        <img
          className={classes.kakao}
          src={process.env.PUBLIC_URL + "/assets/kakao_login_medium_wide.png"}
        />
        {/* <span>회원가입</span>ß */}
      </div>
    </div>
  );
};

const SignModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onModal={props.onModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverLay onModal={props.onModal} />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default SignModal;
