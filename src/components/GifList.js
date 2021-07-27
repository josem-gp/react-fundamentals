import React from "react";
import Gif from "./Gif";

const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
      <Gif selectedGif={gifs} />
    </div>
  );
};

export default GifList;
