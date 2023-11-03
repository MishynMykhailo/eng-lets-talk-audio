import { useSelector } from "react-redux";
import { getBooksState } from "../../redux/books/books-selectors";

import s from "./BookList.module.scss";
import { Link } from "react-router-dom";

interface IProps {
  id: string;
  title: string;
  image: string;
}

function BookList() {
  const books = useSelector(getBooksState);

  return (
    <div className={s.div}>
      {books ? (
        <ul className={s.ul}>
          {books.map((book: IProps) => {
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
                  <p className={s.p}>{book.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>Not Found</h2>
      )}
    </div>
  );
}

export default BookList;
