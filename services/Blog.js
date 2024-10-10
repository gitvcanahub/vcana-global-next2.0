import API from "helpers/API";

let BlogService = {};

const key = "blogs";

BlogService.getAll = async (params) => {
  const res = await API.get(key, { params });
  return await res.data;
};

BlogService.getCategory = async () => {
  const res = await API.get("categorys");
  return await res.data;
};

BlogService.get = async (url) => {
  const res = await API.get(`${key}/${url}`);
  return await res.data;
};

BlogService.createUser = async (data) => {
  const res = await API.post(`comments/user`, data);
  return await res.data;
};

BlogService.commentPost = async (data) => {
  const res = await API.post(`comments`, data);
  return await res.data;
};

BlogService.commentlist = async (id) => {
  const res = await API.get(`comments/${id}`);
  return await res.data;
};

export default BlogService;
