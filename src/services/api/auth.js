import api from "@/services/api/index.js";

export const loginUser = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  return response;
  
};
export const registerUser = async (email, password,username) => {
  const response = await api.post("/auth/register", { email, password ,username});
  return response;
};
