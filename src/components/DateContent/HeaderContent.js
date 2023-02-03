import { Fragment } from "react";

const HeaderContent = ({ location }) => {
  return (
    <Fragment>
      <h1>{location}</h1>
    </Fragment>
  );
};

export default HeaderContent;
