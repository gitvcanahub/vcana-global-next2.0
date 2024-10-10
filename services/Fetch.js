import API from "helpers/API";


// fgdfs

let FetchService = {};

FetchService.get = async () => {
  const res = await API.get("company");
  return await res.data;
};

FetchService.getTechnology = async () => {
  const res = await API.get("technology");
  return await res.data;
};

FetchService.sendEmail = async (data) => {
  const res = await API.post("send-email", data);
  return await res.data;
};

FetchService.saveToken = async (data) => {
  const res = await API.post("notification/save-token", data);
  return await res.data;
};

FetchService.newsLetter = async (data) => {
  const res = await API.post("newsletters", data);
  return await res;
};
FetchService.registrationForm = async (data) => {
  const res = await API.post("registration-form", data);
  return await res;
};

FetchService.portfolioAll = async (params) => {
  const res = await API.get("portfolios", { params });
  return await res.data;
};

FetchService.portfolio = async (id) => {
  const res = await API.get(`portfolios/${id}`);
  return await res.data.data;
};

export default FetchService;
