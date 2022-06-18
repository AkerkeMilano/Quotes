import axios from "axios";

const axiosUrl = axios.create({
  baseURL: "https://test-bb981-default-rtdb.firebaseio.com/"
});

export default axiosUrl;