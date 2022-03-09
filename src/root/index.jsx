import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../Pages/Main";
import SecondPage from "../Pages/SecondPage";

function Root() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/secondpage" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Root;
