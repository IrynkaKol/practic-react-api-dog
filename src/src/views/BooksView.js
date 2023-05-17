import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { booksOperations } from 'redux/books';
import { getBooks } from 'redux/books/booksSelectors';
import PageHeading from 'components/PageHeading/PageHeading';

const makeSlug = string => string.split(' ').join('-').toLowerCase();

export default function BooksView() {
  const location = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading text="Книги" />

      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `/books/${book.id}`,
                }}
                state={{
                  from: {
                    location,
                    label: 'Назад к всем книгами',
                  },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
