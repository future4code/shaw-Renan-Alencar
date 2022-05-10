import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import DetalhesPost from "../pages/DetalhesPost/DetalhesPost";
import Login from "../pages/Login/Login";
import Posts from "../pages/Posts/Posts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<DetalhesPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
