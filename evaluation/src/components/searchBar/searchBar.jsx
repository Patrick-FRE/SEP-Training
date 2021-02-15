import React, { useState } from "react";
import "./searchBar.css";
import { connect } from "react-redux";
import { searchAlbums } from "../../actions/albumAction";

function SearchBar(props) {
  const { searchAlbums } = props;
  const [searchedName, setSearchedName] = useState("");
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchAlbums(searchedName);
      setSearchedName("");
      // alert(searchedName);
    }
  };

  return (
    <form>
      <div class="input__wrapper">
        <input
          type="text"
          class="user-input"
          placeholder="Input the artist's name"
          value={searchedName}
          onKeyDown={(e) => handleSubmit(e)}
          onChange={(e) => {
            setSearchedName(e.target.value);
          }}
        />
        <i class="fa fa-search search-btn"></i>
        <button type="button" class="clean-btn" onClick={() => handleSubmit()}>
          X
        </button>
      </div>
    </form>
  );
}

export default connect((state) => ({}), { searchAlbums })(SearchBar);
