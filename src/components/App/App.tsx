import s from "./App.module.scss";
import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import BookPage from "../../pages/BookPage/BookPage";
import Container from "../Container/Container";
function App() {
  return (
    <div className={s.app}>
      <Container>
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
      </Container>
    </div>
  );
}
export default App;
