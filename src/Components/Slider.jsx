import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    PopularMovies();
  }, []);

  const PopularMovies = () => {
    GlobalApi.GetPopularMovieApi.then((resp) => {
      setMovie(resp.data.results);
      // console.log(movie);
    });
  };

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex justify-center mx-2  md:mx-6 my-6 ">
      <Carousel
        showIndicators={true}
        autoPlay={true}
        interval={3000}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        className="h-[320px]"
      >
        {movie?.map((item) => (
          <div
            key={item.id}
            className=" border-[4px] border-transparent  rounded-md transition-all duration-100 ease-in hover:border-gray-400 cursor-pointer relative "
          >
            <img
              src={imageBaseUrl + item.poster_path}
              className="slider-image"
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
