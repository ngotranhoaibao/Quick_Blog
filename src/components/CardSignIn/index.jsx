import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner"; 

const CardSignIn = ({
  handleLogin,
  email,
  setEmail,
  password,
  setPassword,
  loading = false,
}) => {
  return (
    <Card className="w-full max-w-sm p-8">
      <CardContent className="flex flex-col items-center justify-center gap-4 w-full max-w-xs mx-auto p-0">
        <Link to="/" data-discover="true" className="inline-block">
          <img src="/Images/logo.png" alt="logo" className="w-16 h-16 object-contain" />
        </Link>

        <form className="w-full space-y-3" onSubmit={handleLogin}>
          <Input
            data-slot="input"
            type="email"
            placeholder="Enter your email"
            className="h-9 w-full bg-transparent border border-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            autoComplete="email"
          />
          <Input
            data-slot="input"
            type="password"
            placeholder="Enter your password"
            className="h-9 w-full bg-transparent border border-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            autoComplete="current-password"
          />

          <Button
            data-slot="button"
            type="submit"
            className="w-full h-9"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner className="mr-2 h-4 w-4" /> Logging in…
              </>
            ) : (
              "Login"
              
            )}
          </Button>
        </form>

        <div className="mt-2 text-center">
          <span className="text-sm text-gray-500">
            Don't have an account? 
            <Link to="/sign-up" data-discover="true" className="text-primary">
              Signup
            </Link>
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-0" />
      <CardDescription className="hidden" />
    </Card>
  );
};

export default CardSignIn;
