import React from "react";
const handleKeyUp = (event) => {
  console.log(event.currentTarget.value);
};

const SearchBar = () => {
  return <input className="form-control form-search" onKeyUp={handleKeyUp} />;
};

export default SearchBar;
