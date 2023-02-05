import axios from "axios";
import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./PostModal.module.css";

const BackDrop = (props) => {
  return <div onClick={props.onModal} className={classes.backdrop} />;
};

const ModalOverLay = (props) => {
  let koreaTime = new Date(new Date().toString().split("GMT")[0] + " UTC")
    .toISOString()
    .slice(0, -8);

  const [meetingTime, setMeetingTime] = useState(koreaTime);
  const [attendance, setAttendance] = useState(1);
  const [meetingLocation, setMeetingLocation] = useState("gangnam");
  const [category, setCategory] = useState("promise");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const meetingTimeChangeHandler = (event) => {
    if (meetingTime < koreaTime) {
      setMeetingTime(koreaTime);
      alert("문제있어");
      return;
    }
    setMeetingTime(event.target.value);
  };

  const attendanceChangeHandler = (event) => {
    setAttendance(event.target.value);
  };
  const meetingLocationChangeHandler = (event) => {
    setMeetingLocation(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (title.length < 6 && content.length < 6) return;
    const postContnet = async () => {
      try {
        const data = JSON.stringify({});
        const config = {
          method: "post",
          url: "http://api-dev.theteampearl.com:8080/v1/data/post",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer asdfzxcv",
          },
          data: data,
        };
        const response = await axios(config);
        const responseData = await response.data;
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    postContnet();
  };
  return (
    <div className={classes.modal}>
      <form onSubmit={submitHandler} id="form">
        <section>
          <div className={classes["meeting-time"]}>
            <label htmlFor="meetingTime">약속시간 : </label>
            <input
              value={meetingTime}
              onChange={meetingTimeChangeHandler}
              id="meetingTime"
              type="datetime-local"
              step="900"
              placeholder="약속시간"
              required={true}
            />
          </div>
          <div className={classes.attendance}>
            <label>인원 : </label>
            <select value={attendance} onChange={attendanceChangeHandler}>
              <option value="1">1:1</option>
              <option value="2">2:2</option>
              <option value="3">3:3</option>
              <option value="4">4:4</option>
              <option value="5">5:5</option>
              <option value="6">6:6</option>
            </select>
          </div>
        </section>
        <section className={classes["radio-box"]}>
          <div>
            <label>장소 : </label>
            <input
              type="radio"
              id="gangnam"
              value="gangnam"
              onChange={meetingLocationChangeHandler}
              checked={meetingLocation === "gangnam"}
            />
            <label htmlFor="gangnam">강남</label>
            <input
              type="radio"
              id="magok"
              value="magok"
              onChange={meetingLocationChangeHandler}
              checked={meetingLocation === "magok"}
            />
            <label htmlFor="magok">마곡</label>
            <input
              type="radio"
              id="etc"
              value="etc"
              onChange={meetingLocationChangeHandler}
              checked={meetingLocation === "etc"}
            />
            <label htmlFor="etc">기타</label>
          </div>
          <div>
            <label>게시판 : </label>
            <input
              type="radio"
              id="promise"
              value="promise"
              onChange={categoryChangeHandler}
              checked={category === "promise"}
            />
            <label htmlFor="promise">약속잡기</label>
            <input
              type="radio"
              id="free"
              value="free"
              onChange={categoryChangeHandler}
              checked={category === "free"}
            />
            <label htmlFor="free">자유게시판</label>
            <input
              type="radio"
              id="etc"
              value="etc"
              onChange={categoryChangeHandler}
              checked={category === "etc"}
            />
            <label htmlFor="etc">기타</label>
          </div>
        </section>
        <section className={classes.title}>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={titleChangeHandler}
          />
        </section>
        <section className={classes.content}>
          <label htmlFor="content">내용</label>
          <textarea
            form="form"
            id="content"
            type="text"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={contentChangeHandler}
          />
        </section>
        <button className={classes.button} type="submit">
          글작성
        </button>
      </form>
    </div>
  );
};

const PostModal = (props) => {
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

export default PostModal;
