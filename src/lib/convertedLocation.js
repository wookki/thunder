export const convertedLocation = (location) => {
  let koreaLocation;
  switch (location) {
    case "gangnam":
      koreaLocation = "강남";
      break;
    case "magok":
      koreaLocation = "마곡";
      break;
    case "etc":
      koreaLocation = "기타";
      break;
    default:
      koreaLocation = "강난";
  }
  return koreaLocation;
};
