import React, { useState } from "react";
import Gif from "./Gif";
import SearchBar from "./SearchBar";
import GifList from "./GifList";

const App = () => {
  // const selectedGif = "4JEHyYKmDq9VdaZQAa";
  // const gifs = ["8H80IVPjAdKY8", "cdNSp4L5vCU7aQrYnV"];
  const [selectedGif, setSelectedGif] = useState();
  const [gifs, setGifs] = useState([]);

  const clickSelectedGif = (clickedGif) => {
    setSelectedGif(clickedGif);
  };

  // const giphy = require("giphy-api")({
  //   apiKey: "0SwT6uJNkqFDYP9rHmuM86w8ixQ4EgEf",
  //   https: true,
  // });

  // const changeGifIds = (keyword) => {
  //   giphy.search(
  //     {
  //       q: keyword,
  //       rating: "g",
  //       limit: 10,
  //     },
  //     (err, res) => {
  //       setGifs(res.data.map((gif) => gif.id));
  //     }
  //   );
  // };

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <Gif selectedGif={selectedGif} />
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} clickSelectedGif={clickSelectedGif} />
      </div>
    </div>
  );
};

export default App;
