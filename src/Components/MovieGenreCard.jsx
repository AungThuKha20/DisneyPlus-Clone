/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import GlobalApi from "../Services/GlobalApi";
import { useEffect, useState } from "react";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineArrowBackIosNew
} from "react-icons/md";

const MovieGenreCard = ({ genreId }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    GetMovieItemByGenreId();
  }, []);
  const GetMovieItemByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((result) => {
      setMovie(result.data.results);
      console.log(result.data.results);
    });
  };
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <div>
      <Carousel
        slideSize={{ base: "auto", sm: "22%", md: "18%" }}
        slideGap="md"
        loop
        align="start"
        slidesToScroll={1}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          <MdOutlineKeyboardArrowRight size={30} className=" text-white" />
        }
        previousControlIcon={
          <MdOutlineArrowBackIosNew size={30} className=" text-white" />
        }
      >
        {movie.map((item, index) => {
          return (
            <Carousel.Slide key={item.id}>
              <img
                src={imageBaseUrl + item.poster_path}
                className=" hover:border-gray-200 border-2 border-transparent transition-all duration-200 cursor-pointer hover:scale-95 md:w-[200px] w-[120px]"
                alt=""
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieGenreCard;
