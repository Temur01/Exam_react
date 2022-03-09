import React from "react";
import BooksPage from "../../components/BooksPage";
import ImgMediaCard from "../../components/BooksPage/Card";
import FooterPage from "../../components/Footer";
import HeaderPage from "../../components/Header";
import TitlePage from "../../components/TitlePage";

function SecondPage() {
  return (
    <div>
      <HeaderPage />
      <TitlePage />
      <BooksPage />
      <FooterPage />
    </div>
  );
}

export default SecondPage;
