import React, { useContext } from "react";
import AnimatedWave from "@/components/lightswind/animated-wave";
import "./../../components/lightswind.css";
import CardSignUp from "@/components/CardSignUp";
import { useState } from "react";
import AuthContext from "@/contexts/authContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const {registerUser} = useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      toast.error("Vui lòng nhập đủ email, username và password");
      return;
    }
    try {
      await registerUser({ email, username, password });
      toast.success("Register Success");
      Navigate("/"); 
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Register failed");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full  bg-[lightgray]">
        <AnimatedWave />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <CardSignUp
            handleRegister={handleRegister}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
