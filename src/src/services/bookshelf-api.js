import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const API_KEY = 'd9a0cc661b661e7359674d300e5af663';

export const fetchBooks = async () => {
  const resp = await axios.get(`/trending/movie/day?`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
  return resp.data.results;
};

export const fetchBookById = async id => {
  const resp = await axios.get(`movie/${id}?&language=en-US`, {
    params: {
      api_key: API_KEY,
    },
  });
  return resp.data;
};

export async function fetchAuthors() {
  const { data } = await axios.get(`/authors?_embed=books`);
  return data;
}

// export async function fetchBooks() {
//   const data = await axios.request(options);
//   console.log(data);
//   return data;
// }

// export async function fetchBookById(bookId) {
//   const { data } = await axios.get(`/books/${bookId}?_expand=author`);
//   return data;
// }
