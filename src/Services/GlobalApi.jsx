/* eslint-disable no-unused-vars */
import axios from "axios";

const MovieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "a8cfbd36e10d73b0d55913617cb4b036";
const MovieGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=a8cfbd36e10d73b0d55913617cb4b036";

const GetPopularMovieApi = axios.get(
  MovieBaseUrl + "/movie/popular?api_key=" + apiKey
);
const getMovieByGenreId = (id) =>
  axios.get(MovieGenreBaseUrl + "&with_genres=" + id);

export default { GetPopularMovieApi, getMovieByGenreId };
