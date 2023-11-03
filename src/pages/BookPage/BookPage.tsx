import React from "react";
import Container from "../../components/Container/Container";
import { useSelector } from "react-redux";
import { getBooksState } from "../../redux/books/books-selectors";
import { IBook } from "../../helpers/interfaces";
import { useParams } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";

function BookPage() {
  const { id } = useParams();
  const data = useSelector(getBooksState);
  const book = data.filter((elem: IBook) => elem.id === id);
  return (
    <Container>
      {book.map((e: IBook) => {
        return (
          <>
            <h1>{e.title}</h1>
            <img
              src={e.image}
              alt={`book pic: ${e.title}`}
            />
            <ul>
              {e.audioMp3.map((el) => {
                return (
                  <li>
                    <AudioPlayer
                      title={e.title}
                      audio={el}
                      />
                    <audio
                      controls
                      src={el}
                    />
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </Container>
  );
}

export default BookPage;
