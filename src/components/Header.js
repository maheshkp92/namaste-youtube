import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json.items);
    dispatch(
      cacheResult({
        [searchQuery]: json.items,
      }),
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
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
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-500 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            // onClick={handleSearch}
            className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100"
          >
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[29.50rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((suggestion) => (
                <li
                  key={suggestion?.id?.videoId}
                  className="py-2 shadow-sm hover:bg-gray-200 cursor-pointer"
                >
                  🔍 {suggestion?.snippet?.title}
                </li>
              ))}
            </ul>
          </div>
        )}
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
