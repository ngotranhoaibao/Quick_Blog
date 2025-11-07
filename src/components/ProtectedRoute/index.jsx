import React from "react";
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role: requiredRole }) => {
  const { userInfo, role } = useContext(AuthContext);
  console.log(userInfo, role);

  if (!userInfo) {
    return <Navigate to="/sign-in" />;
  }
  if (role !== requiredRole) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
