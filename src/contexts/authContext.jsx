import React, { useState } from "react";
import { createContext } from "react";
import { loginUser } from "@/services/api/auth";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo") || [])
  );

  const loginContext = async (username, password) => {
    try {
      const res = await loginUser({ username, password });

      if (res.status === 200) {
        setUserInfo(res.data.user);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthContext.Provider value={{ userInfo, loginContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
