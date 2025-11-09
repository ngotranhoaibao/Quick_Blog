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
import { Spinner } from "@/components/ui/spinner";

const CardSignUp = ({
  handleRegister,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  loading = false,
}) => {
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

        <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Enter your name"
            className="h-9 w-full bg-transparent border border-input"
            value={username}
            disabled={loading}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="name"
          />
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-9 w-full bg-transparent border border-input"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            className="h-9 w-full bg-transparent border border-input"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <Button disabled={loading} type="submit" className="w-full h-9">
            {loading ? (
              <>
                <Spinner className="mr-2 h-4 w-4" /> loading
              </>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>

        <div className="mt-2 text-center">
          <span className="text-sm text-gray-500">
            Already have an account?{" "}
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
