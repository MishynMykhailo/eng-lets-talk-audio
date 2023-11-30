import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./BookPage.module.scss";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { IBook } from "../../helpers/interfaces";
import { getBooksState } from "../../redux/books/books-selectors";
function BookPage() {
  const { id } = useParams();
  const data = useSelector(getBooksState);
  const book = data.filter((elem: IBook) => elem.id === id);
  return book.map((e: IBook) => {
    return (
      <div
        className={s.div}
        key={e.title}
      >
        <h1 className={s.h1}>{e.title}</h1>
        <img
          className={s.img}
          src={e.imageLoop}
          alt={`book pic: ${e.title}`}
        />
        <ul className={s.ul}>
          {e.tracks.map((e, index) => {
            const audioOgg = e.ogg[index]; // Соответствующий файл .ogg
            return (
              <li
                className={s.li}
                key={e.mp3 ? e.mp3 : audioOgg ? audioOgg : index}
              >
                <p>{index + 1}</p>
                <p>{e.pages}</p>
                <AudioPlayer audioSrc={e.mp3} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}

export default BookPage;
