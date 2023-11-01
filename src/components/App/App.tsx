import React from "react";
import s from "./App.module.scss";
import Header from "../Header/Header";
import BookList from "../BookList/BookList";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import BookPage from "../../pages/BookPage/BookPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/book/:id"
          element={<BookPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}
export default App;
