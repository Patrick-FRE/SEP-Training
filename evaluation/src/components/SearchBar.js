import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useQuery from "../hooks/useQuery";
import { fetchAlbums } from "../redux/albumList/albumListActions";
import { updateInput } from "../redux/searchInput/searchInputActions";

export default function SearchBar() {
  const searchInput = useSelector((state) => state.search.searchInput);
  const dispatch = useDispatch();

  const history = useHistory();
  const query_param = useQuery();

  useEffect(() => {
    if (query_param) dispatch(updateInput(query_param));
    else if (!query_param && searchInput) dispatch(updateInput(""));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, query_param]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(fetchAlbums(searchInput));
    history.push(`/albumlist?query=${searchInput}`);
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        className="search"
        placeholder="Search..."
        name="search"
        required
        value={searchInput}
        onChange={(e) => dispatch(updateInput(e.target.value))}
      />
    </form>
  );
}
