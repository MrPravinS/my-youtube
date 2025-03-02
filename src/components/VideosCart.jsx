import React from "react";

const VideosCart = ({ info }) => {
  if (!info || !info.snippet) {
    return <div>Loading...</div>;
  }

  const { snippet } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-3 m-2 shadow-lg rounded-lg w-72 hover:scale-105 transition duration-400 cursor-pointer ">
      <img className="px-2 py-2 rounded-md" src={thumbnails.medium.url} alt={title} />
      <h3 className="font-medium">{title}</h3>
      <p className="font-medium">{channelTitle}</p>
    </div>
  );
};

export default VideosCart;
