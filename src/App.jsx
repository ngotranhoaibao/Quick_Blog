import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Singin";
import Signup from "./pages/Signup";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./contexts/authContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import UserManagement from "./pages/UserManagement";
import MyPostsPage from "./pages/MyPostsPage";
function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Toaster toastOptions={{ duration: 4000 }} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="create-blog"
              element={
                <ProtectedRoute >
                  <CreateBlogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="user-management"
              element={
                <ProtectedRoute role="admin">
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-posts"
              element={
                <ProtectedRoute>
                  <MyPostsPage />
                </ProtectedRoute>
              }
            />

            <Route path="blog-detail/:id" element={<BlogDetailPage />} />
          </Route>

          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
