// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import Signin from "./pages/Singin";
import Signup from "./pages/Signup";
import CreateBlogPage from "./pages/CreateBlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="createblog" element={<CreateBlogPage />} />
          <Route path="/blog-detail/:id" element={<BlogDetailPage />} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
