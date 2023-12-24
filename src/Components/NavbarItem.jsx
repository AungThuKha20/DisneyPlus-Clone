/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const NavbarItem = ({ name, icon }) => {
  return (
    <div className=" hover:underline underline-offset-4   cursor-pointer text-white flex h-[50px]  items-center">
      {icon}
      <div className="  ms-2 text-[15px]   ">
        <p className=" ">{name}</p>
      </div>
    </div>
  );
};

export default NavbarItem;
