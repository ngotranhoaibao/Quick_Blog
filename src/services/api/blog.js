import api from "@/services/api/index.js";

export const getPosts = async () => {
    const res = await api.get("/posts");
    const items = res?.data?.items || [];
    return items;
};

export const getPost = async (id) => {
    const res = await api.get(`/posts/${id}`);
    const result = res?.data?.item || res?.data || {};
    return result;
};
