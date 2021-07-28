import React from "react";
import Gif from "./Gif";

const GifList = ({ gifs }) => {
  return gifs.map((gif) => (
    <div className="gif-list">
      <Gif selectedGif={gif} />
    </div>
  ));
};

export default GifList;
