import axios from "axios";

const KEY = "AIzaSyB5P1OAVYief-z_tDCo_xcxXIlwFk9IRV0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
