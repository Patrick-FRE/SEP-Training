import React from "react";
import "./searchBar.css";

export default function SearchBar() {
  return (
    <form>
      <div class="input__wrapper">
        <input type="text" class="user-input" placeholder="Input the artist's name" />
        <i class="fa fa-search search-btn"></i>
        <button type="button" class="clean-btn">
          X
        </button>
      </div>
    </form>
  );
}
