import React from "react";
import AnimatedWave from "@/components/lightswind/animated-wave";
import "./../../components/lightswind.css";
import CardSignUp from "@/components/CardSignUp";
import { useState } from "react";
import { registerUser } from "@/services/api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; 
const Signup = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const register = async () => {
    try {
      const response = await registerUser(email, password, username);
      console.log(response);
      toast.success("Register Success");
      Navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full  bg-[lightgray]">
        <AnimatedWave />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <CardSignUp
            register={register}
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
