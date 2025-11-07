import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

export function DropDown({ handleLogout }) {
  const { userInfo } = useContext(AuthContext);
  const role =
    userInfo?.user?.role ??
    userInfo?.role ??
    null;
  const isLoggedIn = !!userInfo?.accessToken || !!userInfo?.token;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-9 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="text-foreground"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="min-w-40 w-fit p-2 rounded-md border shadow-md z-50"
      >
        {!isLoggedIn ? (
          <>
            <DropdownMenuItem asChild>
              <Link to="/sign-in" className="flex gap-2 items-center">
                <svg {...common}>
                  <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
                  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
                  <path d="M12 11v2a14 14 0 0 0 2.5 8" />
                  <path d="M8 15a18 18 0 0 0 1.8 6" />
                  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
                </svg>
                Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/sign-up" className="flex gap-2 items-center">
                <svg {...common}>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                </svg>
                Sign up
              </Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link to="/my-posts" className="flex gap-2 items-center">
                <svg {...common}>
                  <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="2" />
                  <path d="M9 12h.01M13 12h2M9 16h.01M13 16h2" />
                </svg>
                My Posts
              </Link>
            </DropdownMenuItem>

            {role === "admin" && (
              <DropdownMenuItem asChild>
                <Link to="/user-management" className="flex gap-2 items-center">
                  <svg {...common}>
                    <path d="M10 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                    <path d="M4 8v-2a2 2 0 0 1 2-2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2-2v-2" />
                    <path d="M8 16a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
                  </svg>
                  User Management
                </Link>
              </DropdownMenuItem>
            )}

            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link
                to="/sign-in"
                onClick={handleLogout}
                className="flex gap-2 items-center"
              >
                <svg {...common}>
                  <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                  <path d="M9 12h12l-3-3" />
                  <path d="M18 15l3-3" />
                </svg>
                Logout
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const common = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "text-muted-foreground",
};
