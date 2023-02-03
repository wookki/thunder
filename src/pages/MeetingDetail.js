import CommentList from "../components/DateContent/DateContentComments/CommentList";
import ContentDetail from "../components/DateContent/ContentDetail";
import PostDetailUI from "../UI/PostDetailUI";
import PostCardUI from "../UI/PostCardUI";
import { useParams } from "react-router-dom";
import { convertedLocation } from "../lib/convertedLocation";

const MeetingDetail = () => {
  const { location } = useParams();
  const koreaLocation = convertedLocation(location);
  return (
    <PostCardUI>
      <h1>{koreaLocation}</h1>
      <PostDetailUI>
        <ContentDetail />
      </PostDetailUI>
      <PostDetailUI>
        <CommentList />
      </PostDetailUI>
    </PostCardUI>
  );
};

export default MeetingDetail;
