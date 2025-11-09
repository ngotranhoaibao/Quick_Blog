import api from "@/services/api/index.js";

export const loginUser = async (payload) => {
    return await api.post("/auth/login", payload);
};

export const register = async (payload) => {
    return await api.post("/auth/register", payload);
};

export const getMe = async () => {
    return await api.get("/auth/me");
}
 export const logoutUser = async () => {
    return await api.post("/auth/logout");
}
export const getUsers = async () => {
    return await api.get("/users");
}

export const setRoleUser = async (id, role) => {
    return await api.put(`/users/${id}/role`, role);
}

export const deleteUser = async (payload) => {
    return await api.delete(`/users/${payload}`);
};