import React from "react";
import Gif from "./Gif";
import SearchBar from "./SearchBar";
import GifList from "./GifList";

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif />
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;
