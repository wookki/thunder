import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import PostModal from "../UI/modal/PostModal";
import classes from "./AsideNavigationBar.module.css";

const AsideNavigationBar = () => {
  const [isModal, setIsModal] = useState(false);
  const modalHandler = () => {
    setIsModal(!isModal);
  };
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
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/gangnam"
                >
                  강남
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/magok"
                >
                  마곡
                </NavLink>
              </li>
              <li>용인</li>
              <li>인천</li>
              <li>용산</li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/etc"
                >
                  기타
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};

export default AsideNavigationBar;
