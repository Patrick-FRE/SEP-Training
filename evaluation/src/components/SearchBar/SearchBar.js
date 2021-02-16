import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {

  return (
    <div className="search">
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        required
        placeholder="Search here..."
        className="searchbar"
        onChange={props.handleChange}
      ></input>
      <button type="submit" className="button">
        Search
      </button>
    </form>
  </div>
  );
};

export default SearchBar;