import axios from "axios";

const API_URL = "http://localhost:5000/api/banner";

export const getBannerData = async () => {
  return await axios.get(API_URL);
};

export const updateBannerData = async (data) => {
  return await axios.post(API_URL, data);
};
