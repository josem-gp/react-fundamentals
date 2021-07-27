import React from "react";

const Gif = ({ selectedGif }) => {
  return (
    <div className="selected-gif">
      <img
        className="gif"
        src={`https://media.giphy.com/media/${selectedGif}/giphy.gif`}
      ></img>
    </div>
  );
};

export default Gif;
