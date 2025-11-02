import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { DropDown } from "@/components/DropDown"; 
import AuthContext from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();
  const { userInfo, logout } = React.useContext(AuthContext);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const handleLogout = () => {
    logout();
  }
   const isLoggedIn = !!(
    userInfo?.accessToken ||
    userInfo?.token ||
    JSON.parse(localStorage.getItem("userInfo") || "{}")?.accessToken ||
    JSON.parse(localStorage.getItem("userInfo") || "{}")?.token
  );

  const handleCreateClick = () => {
    if (isLoggedIn) navigate("/create-blog");
    else navigate("/sign-in");
  };

  return (
    <div className="xl:container py-4 mx-auto fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32">
        <Link to="/">
          <img
            className="max-w-12 cursor-pointer"
            src="/Images/logo.png"
            alt="logo"
          />
        </Link>

        <div className="flex justify-end items-center gap-2">
            <Button onClick={handleCreateClick}  className="bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
              Create Blog
            </Button>

          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`bg-transparent hover:bg-accent ${
              theme === "dark" ? "hover:bg-accent/50" : ""
            }`}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5v.01M17 7v.01M19 12v.01M17 17v.01M12 19v.01M7 17v.01M5 12v.01M7 7v.01" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <path d="M12 3a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3z" />
              </svg>
            )}
          </Button>
          <DropDown handleLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
