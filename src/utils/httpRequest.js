import axios from "axios";
const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
      }
    }
    return error;
  }
);
export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};
export const post = async (path, options = {}) => {
  const response = await httpRequest.post(path, options);
  return response.data;
};

export default httpRequest;
