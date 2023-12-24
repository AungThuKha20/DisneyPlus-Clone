/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../images/logo.png";
import profile from "../images/pf.jpg";
import { FaHome, FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";
import { BsThreeDotsVertical } from "react-icons/bs";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const navItem = [
    {
      id: 1,
      name: "HOME",
      icon: <FaHome size={20} />
    },
    {
      id: 2,
      name: "SEARCH",
      icon: <FaSearch size={20} />
    },
    {
      id: 3,
      name: "WATCH LIST",
      icon: <IoMdAdd size={20} />
    },
    {
      id: 4,
      name: "ORIGINALS",
      icon: <FaStar size={20} />
    },
    {
      id: 5,
      name: "MOVIES",
      icon: <RiMovie2Fill size={20} />
    },
    {
      id: 6,
      name: "SERIES",
      icon: <PiTelevisionBold size={20} />
    }
  ];
  return (
    <div>
      <div className=" flex  justify-between py-2 px-4 ">
        <div className=" flex">
          <img src={logo} className="h-[40px]" />
          <div className=" lg:mx-12 lg:flex hidden justify-center gap-6 align-middle">
            {navItem.map((item) => {
              return <NavbarItem key={item.id} {...item} />;
            })}
          </div>
          <div className=" text-[20px] mx-8 md:mx-20 flex lg:hidden gap-4 md:gap-20 align-middle">
            {navItem.map(
              (item, index) =>
                index < 3 && <NavbarItem key={item.id} icon={item.icon} />
            )}
            <div onClick={handleMenu} className="  lg:hidden relative">
              <NavbarItem name={""} icon={<BsThreeDotsVertical />} />
              {menu ? (
                <div className=" border border-gray-300 p-4  absolute">
                  {navItem.map(
                    (item, index) =>
                      index > 2 && (
                        <NavbarItem
                          key={item.id}
                          name={item.name}
                          icon={item.icon}
                        />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <img
          src={profile}
          className=" cursor-pointer h-[40px] w-[40px] rounded-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
