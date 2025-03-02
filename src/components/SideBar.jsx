import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-2 shadow-md w-48 items-center justify-center">
      <div className=" border-b-1 border-gray-400">
        <h1 className="px-2 py-2 m-2 rounded-md bg-gray-200 items-center cursor-pointer hover:bg-gray-300">
          Home
        </h1>
        <h1 className="px-2 py-2 m-2 rounded-md bg-gray-200 items-center cursor-pointer hover:bg-gray-300">
          Subscription
        </h1>
      </div>

      <div className="m-1  flex justify-center items-center border-b-gray-300">
        <ul className="m-2  w-full">
          <li className=" rounded-md bg-gray-200 px-2 py-2 w-full  mb-3 cursor-pointer hover:bg-gray-300">
            You{" "}
          </li>
          <li className=" rounded-md bg-gray-200 px-2 py-2 mb-2 w-full  cursor-pointer hover:bg-gray-300">
            History
          </li>
          <li className=" rounded-md bg-gray-200 px-2 py-2 w-full  mb-3 cursor-pointer hover:bg-gray-300">
            Playlists
          </li>
          <li className=" rounded-md bg-gray-200 px-2 py-2 w-full  mb-3 cursor-pointer hover:bg-gray-300">
            Your videos
          </li>
          <li className=" rounded-md bg-gray-200 px-2 py-2 w-full  mb-3 cursor-pointer hover:bg-gray-300">
            Your courses
          </li>
          <li className=" rounded-md bg-gray-200 px-2 py-2 w-full  mb-3 cursor-pointer hover:bg-gray-300">
            Watch Later
          </li>
          <li className=" rounded-md bg-gray-200 px-2 py-2 w-full  mb-3 cursor-pointer hover:bg-gray-300">
            Liked videos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
