import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./PostModal.module.css";

const BackDrop = (props) => {
  return <div onClick={props.onModal} className={classes.backdrop} />;
};

const ModalOverLay = (props) => {
  const [meetingTime, setMeetingTime] = useState();
  return (
    <div className={classes.modal}>
      <form>
        <section>
          <div className={classes["meeting-time"]}>
            <label htmlFor="meetingTime">약속시간 : </label>
            <input
              id="meetingTime"
              type="datetime-local"
              step="300"
              placeholder="약속시간"
              required={true}
            />
          </div>
          <div className={classes.attendance}>
            <label>인원수</label>
            <select>
              <option value="1">1:1</option>
              <option value="2">2:2</option>
              <option value="3">3:3</option>
              <option value="4">4:4</option>
              <option value="5">5:5</option>
              <option value="6">6:6</option>
            </select>
          </div>
        </section>
        <section>
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
            />
            <label htmlFor="contactChoice1">Email</label>

            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="phone"
            />
            <label htmlFor="contactChoice2">Phone</label>

            <input
              type="radio"
              id="contactChoice3"
              name="contact"
              value="mail"
            />
            <label htmlFor="contactChoice3">Mail</label>
          </div>
          {/* <div>
            <label htmlFor="location">장소</label>
            <option id="location">
              <option>강남</option>
              <option>마곡</option>
              <option>기타</option>
            </select>
          </div> */}
          <div>
            <label htmlFor="category">분류</label>
            <select id="category">
              <option>미팅잡기</option>
              <option>자유게시판</option>
              <option>기타</option>
            </select>
          </div>
        </section>
        <section>
          <input type="text" placeholder="제목을 입력해주세요" />
        </section>
        <section>
          <textarea type="text" placeholder="내용을 입력해주세요" />
        </section>
        <button type="submit">글작성</button>
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
