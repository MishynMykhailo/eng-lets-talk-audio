import React from "react";
import s from "./BookList.module.scss";
import data from "../../helpers/data.json";
import { Link } from "react-router-dom";
function BookList() {
  return (
    <>
      {data ? (
        <ul className={s.ul}>
          {data.map((book) => {
            return (
              <li
                key={book.id}
                className={s.li}
              >
                <Link to={`book/${book.id}`}>
                  <img
                    src={book.image}
                    alt={book.title}
                    className={s.img}
                  />
                  <h2 className={s.h2}>{book.title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>Not Found</h2>
      )}
    </>
  );
}

export default BookList;
