import React from "react";
import Gif from "./Gif";

const GifList = ({ gifs, clickSelectedGif }) => {
  return gifs.map((gif) => (
    <div className="gif-list" key={gif}>
      <Gif selectedGif={gif} clickSelectedGif={clickSelectedGif} />
    </div>
  ));
};

export default GifList;
