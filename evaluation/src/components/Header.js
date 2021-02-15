import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchAlbums } from "../redux/albumList/albumListActions";
import { updateName } from "../redux/artistName/artistNameActions";

function Header({ artistName, fetchAlbums, updateName }) {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchAlbums(artistName);
    history.push(`/albumlist?query=${artistName}`);
  };

  return (
    <header>
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          className="search"
          placeholder="Search..."
          name="search"
          required
          value={artistName}
          onChange={(e) => updateName(e)}
        />
      </form>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    artistName: state.artist.artistName,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateName: (e) => dispatch(updateName(e)),
  fetchAlbums: (artistName) => dispatch(fetchAlbums(artistName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
