/* eslint-disable no-undef */
import MovieList from "../Constant/MovieList";
import MovieGenreCard from "./MovieGenreCard";

const MovieGenre = () => {
  return (
    <div>
      {MovieList.genres?.map((item) => {
        // console.log(item);
        return (
          <div
            className=" md:mx-7 mx-2 my-8 text-white flex flex-wrap"
            key={item.id}
          >
            <h2 className=" text-[18px] font-serif md:text-[22px] mb-2 font-bold">
              {item.name}
            </h2>

            <MovieGenreCard genreId={item.id} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieGenre;
