import React, { useState, createContext } from "react";
import { loginUser, getMe,logoutUser, register } from "@/services/api/auth";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  const loginContext = async (email, password) => {
    try {
      const res = await loginUser({ email, password });

      if (res.status === 200) {
        setUserInfo(res.data.user);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      }
      try {
        const me = await getMe();
        if (me.status === 200) {
          const oldData = JSON.parse(localStorage.getItem("userInfo")) || {};
          const updated = { ...oldData, user: me.data?.user || me.data };
          localStorage.setItem("userInfo", JSON.stringify(updated));
          setUserInfo(updated);

          toast.success("Đăng nhập thành công!");
        } else {
          toast.error("Không thể lấy thông tin người dùng!");
        }
      } catch (error) {
        console.error(" Lỗi getMe:", error);
        toast.error("Không thể lấy thông tin người dùng!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };
  const logout = async () => {
    try {
      await logoutUser();
      setUserInfo(null);
      localStorage.removeItem("userInfo");
    } catch (error) {
      console.error(error);
    }
  }
  const registerUser = async ({ email, username, password }) => {
    return await register({ email, username, password });
  };
  return (
    <AuthContext.Provider value={{ userInfo, loginContext,logout,registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
