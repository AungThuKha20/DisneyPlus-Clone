/* eslint-disable no-unused-vars */
import React from "react";
import disneyImg from "../images/disney.png";
import marvelImg from "../images/marvel.png";

import nationalImg from "../images/nationalG.png";

import pixarImg from "../images/pixar.png";
import starwarImg from "../images/starwar.png";
import disneyV from "../videos/disney.mp4";
import marvelV from "../videos/marvel.mp4";

import nationalGV from "../videos/nationalG.mp4";

import pixarV from "../videos/pixar.mp4";
import starwarV from "../videos/star-wars.mp4";

const Production = () => {
  const production = [
    { id: 1, img_pd: disneyImg, bg_vd: disneyV },
    { id: 2, img_pd: marvelImg, bg_vd: marvelV },
    { id: 3, img_pd: nationalImg, bg_vd: nationalGV },
    { id: 4, img_pd: pixarImg, bg_vd: pixarV },
    { id: 5, img_pd: starwarImg, bg_vd: starwarV }
  ];
  return (
    <div>
      <div className=" flex md:gap-6 gap-2 mx-2 md:mx-7">
        {production.map((pd) => {
          return (
            <div
              key={pd.id}
              className=" bg-gray-900 shadow-lg relative group border-2 hover:scale-110 transition-all duration-200 cursor-pointer border-gray-500"
            >
              <img className=" ]" src={pd.img_pd} alt="" />
              <video
                className=" opacity-0 group-hover:opacity-70 top-0 absolute"
                src={pd.bg_vd}
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Production;
