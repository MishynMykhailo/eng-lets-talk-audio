import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
function BookPage() {
  const data = useParams();
  console.log(data);
  return (
    <Container>
      <div>BookPage</div>;
    </Container>
  );
}

export default BookPage;
