import axios from "axios";
import { config } from "/config";

const API = () => {
  const defaultOptions = {
    baseURL: config.appUrl,
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      return Promise.reject(error?.response?.data);
    }
  );

  return instance;
};

export default API();
