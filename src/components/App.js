import React from "react";
import Gif from "./Gif";
import SearchBar from "./SearchBar";
import GifList from "./GifList";

const App = () => {
  const selectedGif = "4JEHyYKmDq9VdaZQAa";
  const gifs = ["8H80IVPjAdKY8", "cdNSp4L5vCU7aQrYnV"];

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif selectedGif={selectedGif} />
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} />
      </div>
    </div>
  );
};

export default App;
