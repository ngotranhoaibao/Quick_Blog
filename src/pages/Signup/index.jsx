import React, { useContext, useState } from "react";
import AnimatedWave from "@/components/lightswind/animated-wave";
import CardSignUp from "@/components/CardSignUp";
import AuthContext from "@/contexts/authContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ email, password, username });
      toast.success("Đăng ký thành công!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Register failed");
      
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full bg-[lightgray]">
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
