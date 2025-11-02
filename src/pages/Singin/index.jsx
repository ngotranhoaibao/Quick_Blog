// pages/Signin.jsx
import React, { useState, useContext } from "react";
import AnimatedWave from "@/components/lightswind/animated-wave";
import "./../../components/lightswind.css";
import CardSignIn from "@/components/CardSignIn";
import { useNavigate } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
import { toast } from "react-hot-toast";

const Signin = () => {
  const { loginContext } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await loginContext(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full bg-[lightgray]">
        <AnimatedWave />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <CardSignIn
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
