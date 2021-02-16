import React, { useState } from "react";
// import "./searchBar.css";
import { connect } from "react-redux";
import { searchAlbums } from "../../actions/searchActions";
import { useHistory } from "react-router-dom";

function SearchForm(props) {
  const history = useHistory();
  const { searchAlbums } = props;
  const [searchedName, setSearchedName] = useState("");
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchAlbums(searchedName);
      setSearchedName("");
      history.push({
        pathname: "/albumlist",
        search: `?query=${searchedName.split(" ").join("+")}`,
      });
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
        <i class="fa fa-search search-btn" onClick={() => searchAlbums(searchedName)}></i>
      </div>
    </form>
  );
}

export default connect((state) => ({}), { searchAlbums })(SearchForm);