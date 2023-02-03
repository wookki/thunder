import { useNavigate } from "react-router-dom";

const SearchContentDetail = (props) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/gangnam/${props.content.postNum}`);
  };

  return (
    <div onClick={goToDetail}>
      <span>{props.content.title}</span>
      <span>{props.content.content}</span>
    </div>
  );
};

export default SearchContentDetail;
