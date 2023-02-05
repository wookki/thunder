import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import SignModal from "../UI/SignModal";

import { BsThreeDots } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";
import { GrSearch } from "react-icons/gr";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const changeSearchContent = (event) => {
    setSearchContent(event.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchContent.length === 0) return;

    navigate(`/search?results=${searchContent}`);
    setSearchContent("");
  };
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <Fragment>
      {modal && <SignModal onModal={modalHandler} />}
      <header className={classes.header}>
        <div className={classes["logo-box"]}>
          <VscListFlat size={45} className={classes["react-icons"]} />
          <img
            src={process.env.PUBLIC_URL + "/assets/thunder.002.png"}
            alt="logo"
            onClick={goToHome}
          />
        </div>
        <form onSubmit={submitHandler} className={classes["input-box"]}>
          <GrSearch size={20} className={classes["search-icon"]} />
          <input
            placeholder="Search"
            value={searchContent}
            onChange={changeSearchContent}
          />
        </form>
        <div className={classes["btn-group"]}>
          <button onClick={modalHandler}>로그인</button>
          <button>회원가입</button>
          <BsThreeDots />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
