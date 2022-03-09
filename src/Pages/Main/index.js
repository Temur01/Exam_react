import React from "react";
import Categories from "../../components/Categories";
import FooterPage from "../../components/Footer";
import HeaderPage from "../../components/Header";
import TitlePage from "../../components/TitlePage";

function MainPage() {
  return (
    <div>
      <HeaderPage />
      <TitlePage />
      <Categories />
      <FooterPage />
    </div>
  );
}

export default MainPage;
