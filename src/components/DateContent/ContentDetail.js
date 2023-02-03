import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiThumbsUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { GrTime } from "react-icons/gr";

import classes from "./ContentDetail.module.css";
import { timeForToday } from "../../lib/calculatedTime";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#36d7b7",
};

const ContentDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [time, setTime] = useState({
    postTime: "",
    meetingTime: "",
  });
  useEffect(() => {
    const getDetail = async (id) => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: "GET",
          url: `http://api-dev.theteampearl.com:8080/v1/data/post/${id}`,
          headers: {
            Authorization: "Bearer asdfzxcv",
            Accept: "application/json",
          },
        });
        const data = await response.data;
        setDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail(id);
  }, []);

  useEffect(() => {
    if (detail) {
      setTime({
        postTime: timeForToday(detail.auditAt),
        meetingTime: timeForToday(detail.meetingDateTime),
      });
    }
  }, [detail]);
  return (
    <Fragment>
      <ClipLoader
        color="#36d7b7"
        loading={isLoading}
        cssOverride={override}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {!isLoading && (
        <section>
          <h1>{detail.title}</h1>
          <div className={classes["user-info"]}>
            <span>{detail.userInfo.company}</span>
            <span>{detail.userInfo.nickName}</span>
          </div>
          <div className={classes["content-info"]}>
            <AiOutlineClockCircle />
            <span>{time.postTime}</span>
            <GoComment id="comments" />
            <span>{detail.commentCount}</span>
          </div>
          <div className={classes["meeting-info"]}>
            <GrTime />
            <span>{time.meetingTime}</span>
            <BsFillPersonPlusFill />
            <span>{detail.attendance * 2}</span>
          </div>
          <div className={classes["content-box"]}>{detail.content}</div>
          <div className={classes.footer}>
            <FiThumbsUp />
            <span>{detail.likeCount}</span>
            <GoComment />
            <span>{detail.commentCount}</span>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default React.memo(ContentDetail);
