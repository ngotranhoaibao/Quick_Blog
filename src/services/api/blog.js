import api from "@/services/api/index.js";

export const getAllPost = async () => {
  const res = await api.get("/posts");
  const items = res?.data?.items || [];
  return items;
};

export const getPost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  const result = res?.data?.item || res?.data || {};
  return result;
};
export const createPost = async (payload) => {
  return await api.post("/posts", payload);
};
export const deletePost = async (id) => {
  return await api.delete(`/posts/${id}`);
};