import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSLice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggetions,setShowSuggetions] = useState(false)
  const dispatch = useDispatch()

  const searchCache = useSelector((store)=>store.search) 
  useEffect(() => {
    // console.log(searchQuery);
    // make a api call after every key press
  
    // but if the difference bet 2 api calss is <200 decline the api call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API call", searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])
    // console.log(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  m-2 shadow-md">
      <div className="flex items-center col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://imgs.search.brave.com/W1s08MJkx8vC6liCAcAh14UUaqhx6nd8TGCmrov_yIY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ1Lzgw/LzM2MF9GXzEwOTQ1/ODAxNV9Rc1dtY2hs/enV3Q1pQcUlVV1I3/SGNURHNiYnB0ZWpS/di5qcGc"
          alt="menu"
        />
        <a href="#">
          <img
            className="h-18 pl-2 "
            src="https://imgs.search.brave.com/sp4DoshDvbNaYny5xuAj_vbYxvhDafhc4kVaCPRThvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0Lzhn/emNyNlJwR1N0dlpG/QTJxUnQ0djYtNjUw/LTgwLmpwZw"
            alt="yt-logo"
          />
        </a>
      </div>
      <div className="col-span-10 p-4 justify-center ">
        <div className="">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggetions(true)}
            onBlur={()=>setShowSuggetions(false)}
            className="w-1/2 border border-gray-400 rounded-l-full p-1 justify-center"
          />
          <button className="border border-gray-400 rounded-r-full p-1 px-4 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggetions && (
        <div className="fixed px-2 py-3 m-1 bg-white w-90 border border-gray-200">
          <ul>
            {suggestions.map((s,index) => (
              <li
                key={index}
                className="px-5 py-2 rounded-lg hover:shadow-md  hover:bg-gray-100"
              >
              🔍 {s}
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
      <div className="col-span-1 justify-center">
        <img
          className="h-10"
          src="https://imgs.search.brave.com/hWUZ4Qvcg8eYSjarlWCxrh5RfTG5FsOq3fweeC3ADyc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
