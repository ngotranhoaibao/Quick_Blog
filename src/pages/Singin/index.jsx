import React, { useState, useContext } from "react";
import AnimatedWave from "@/components/lightswind/animated-wave";
import "./../../components/lightswind.css";
import CardSignIn from "@/components/CardSignIn";
import { useNavigate } from "react-router-dom";
import AuthContext from "@/contexts/authContext";
const Signin = () => {
  const { loginContext } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // await login(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full  bg-[lightgray]">
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
