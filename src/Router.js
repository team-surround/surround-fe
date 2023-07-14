import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";
import Main from "./pages/Main/Main";
import Splash from "./components/Splash/Splash";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* FIXME: Splash는 테스트용 라우터입니다. */}
        <Route path="/splash" element={<Splash />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h1>해당 주소는 없는 페이지입니다.</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
