import * as booksActions from './booksAction';
import * as booksShelAPI from '../../services/bookshelf-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest());
//   try {
//     const books = await booksShelAPI.fetchBooks(); // будуть вже книжки у списку
//     dispatch(booksActions.fetchBooksSuccess(books)); // якщо запит успішний
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  try {
    const books = await booksShelAPI.fetchBooks(); // будуть вже книжки у списку
    console.log(books);
    return books; // якщо запит успішний
  } catch (error) {}
});

export const fetchBookInfo = createAsyncThunk('books/fetch', async id => {
  try {
    const books = await booksShelAPI.fetchBookById(id); // будуть вже книжки у списку
    console.log(books);
    return books; // якщо запит успішний
  } catch (error) {}
});
