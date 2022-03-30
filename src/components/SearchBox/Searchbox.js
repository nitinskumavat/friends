import { useState } from "react";
import "./searchbox.css";
import searchImage from "../../Assets/search.png";


function SearchBox({ updateSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const inputSearch = (value) => {
    setSearchQuery(value);
    updateSearch(value);
  };

  return (
    <div className="search-box">
      <input
        className=""
        type="text"
        onChange={(e) => {
          inputSearch(e.target.value);
        }}
        value={searchQuery}
        placeholder={"Search Friend"}
      ></input>
      <img src={searchImage}></img>
    </div>
  );
}

export default SearchBox;
