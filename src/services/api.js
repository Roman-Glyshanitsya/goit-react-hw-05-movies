import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'a44bb9523e0650c67fadd4918a95b1b0';

export async function fetchTrending() {
  const response = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return response.data;
}

export async function searchMovies() {
  const response = await axios.get(
    `/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
}

export async function movieDetails(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

export async function movieCredits(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
}

export async function movieReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  return response.data;
}
