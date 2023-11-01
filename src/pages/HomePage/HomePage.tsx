import React from "react";
import Container from "../../components/Container/Container";
import BookList from "../../components/BookList/BookList";
import s from "./HomePage.module.scss";
function HomePage() {
  return (
    <Container>
      <BookList />
    </Container>
  );
}

export default HomePage;
