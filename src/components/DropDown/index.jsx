import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export function DropDown({ handleLogout }) {
  const { userInfo } = useContext(AuthContext);
  const role = userInfo?.user?.role || userInfo?.role;
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-9 px-2" onClick={() => {
              if (!userInfo) {
                toast("Vui lòng đăng nhập để xem bài viết của bạn");
                navigate("/sign-in", { state: { redirectTo: "/my-posts" } });
                return;
              }
              navigate("/my-posts");} }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
