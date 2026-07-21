import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt="hamburger-menu"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8TsMnYDoL7Uh8KGOHKXoeTYKRbt--bxOsofwPWm9UwqDss5TrsaruyDzy&s=10"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XHmxROgOWcYHKaEW2-hBs09sUbpH-9kZarUft67BeA&s=10"
        />
      </div>
    </div>
  );
};

export default Header;
