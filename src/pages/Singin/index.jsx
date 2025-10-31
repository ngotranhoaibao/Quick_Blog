import React from "react";
import AnimatedWave from "@/components/lightswind/animated-wave";
import "./../../components/lightswind.css";
import CardSignIn from "@/components/CardSignIn";
const Signin = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative w-full h-full  bg-[lightgray]">
        <AnimatedWave  />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <CardSignIn/>
        </div>
      </div>
    </div>
  );
};

export default Signin;
