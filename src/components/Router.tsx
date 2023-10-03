import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/logIn";
import PostsPage from "../pages/posts";
import PostsDetail from "../pages/posts/detail";
import PostsEditPage from "../pages/posts/edit";
import PostsNewPage from "../pages/posts/new";
import ProfilePage from "../pages/profile";
import SingUpPage from "../pages/singUp";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostsDetail />} />
      <Route path="/posts/new" element={<PostsNewPage />} />
      <Route path="/posts/edit/:id" element={<PostsEditPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/logIn" element={<LoginPage />} />
      <Route path="/signUp" element={<SingUpPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default Router;
