// App.jsx
import React from "react";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Singin";
import Signup from "./pages/Signup";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import { Toaster } from "react-hot-toast";
import AuthContext from "./contexts/authContext";
function App() {
  return (
    <Router>
      <AuthContext>
        <Toaster toastOptions={{ duration: 4000 }} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="createblog" element={<CreateBlogPage />} />
            <Route path="/blog-detail/:id" element={<BlogDetailPage />} />
          </Route>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </AuthContext>
    </Router>
  );
}

export default App;
