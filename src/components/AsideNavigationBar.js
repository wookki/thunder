import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getLocation } from "../store/location-slice";
import PostModal from "../UI/modal/PostModal";
import classes from "./AsideNavigationBar.module.css";

const AsideNavigationBar = () => {
  const location = useSelector((state) => state.location.location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation());
  }, []);
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => {
    setIsModal(!isModal);
  };
  console.log(location);
  return (
    <Fragment>
      {isModal && <PostModal onModal={modalHandler} />}
      <div className={classes.asideBar}>
        <div className={classes["btn-box"]}>
          <button onClick={modalHandler}>WRITE A POST</button>
        </div>
        <div className={classes.category}>
          <h3>장소</h3>
          <nav className={classes["location-box"]}>
            <ul>
              {location.map((item) => (
                <li>
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? classes.active : ""
                    }
                    to={`/${item.code.toLowerCase()}`}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={classes.category}>
          <h3>자유게시판</h3>
          <nav className={classes["location-box"]}>
            <ul>
              <li>미팅후기</li>
              <li>놀이터</li>
              <li>맛집탐방</li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default AsideNavigationBar;
