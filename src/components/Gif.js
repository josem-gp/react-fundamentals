import React from "react";

const Gif = ({ selectedGif, clickSelectedGif }) => {
  const handleClick = (selectedGif) => {
    clickSelectedGif(selectedGif);
  };

  return (
    <div className="selected-gif">
      <img
        className="gif"
        src={`https://media.giphy.com/media/${selectedGif}/giphy.gif`}
        onClick={() => {
          handleClick(selectedGif);
        }}
      ></img>
    </div>
  );
};

export default Gif;
