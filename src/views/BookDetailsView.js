import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookShelfAPI from '../services/bookshelf-api';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w400';

export default function BookDetailsView() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(id).then(setBook);
  }, [id]);

  return (
    <>
      {book && (
        <>
          <PageHeading text={`Фільм ${book.title}`} />
          <img src={BASE_IMG_URL + book.poster_path} alt={book.title} />
        </>
      )}
    </>
  );
}
