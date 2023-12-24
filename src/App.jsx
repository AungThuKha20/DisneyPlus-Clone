/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Production from "./Components/Production";
import MovieGenre from "./Components/MovieGenre";

const App = () => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Slider />
      <Production />
      <MovieGenre />
      <footer className=" h-[50px]"></footer>
    </div>
  );
};

export default App;
