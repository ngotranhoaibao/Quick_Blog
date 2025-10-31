import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CardSignUp = ({ register, email, setEmail, password, setPassword, username, setUsername }) => {

  return (
      <Card className="w-full max-w-sm p-8">
        <CardContent className="flex flex-col items-center justify-center gap-4 w-full max-w-xs mx-auto p-0">
          <Link to="/" data-discover="true" className="inline-block">
            <img
              src="/Images/logo.png"
              alt="logo"
              className="w-16 h-16 object-contain"
            />
          </Link>

          <Input
            data-slot="input"
            type="email"
            placeholder="Enter your email"
            className="h-9 w-full bg-transparent border border-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <Input
            data-slot="input"
            type="username"
            placeholder="Enter your username"
            className="h-9 w-full bg-transparent border border-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            data-slot="input"
            type="password"
            placeholder="Enter your password"
            className="h-9 w-full bg-transparent border border-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button data-slot="button" type="submit" className="w-full h-9" onClick={register}>
            Login
          </Button>
          <div className="mt-2 text-center">
            <span className="text-sm text-gray-500">
              Already have an account?
              <Link to="/sign-in" data-discover="true" className="text-primary">
                Login
              </Link>
            </span>
          </div>
        </CardContent>

        <CardFooter className="p-0" />
        <CardDescription className="hidden" />
      </Card>
  );
};

export default CardSignUp;
