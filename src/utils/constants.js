const YOUTUBE_API_KEY = process.env["REACT_APP_YOUTUBE_API_KEY"];

export const YOUTUBE_VIDEO_LIST_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  YOUTUBE_API_KEY +
  "&q=";
