import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function Fallback() {
  const isLoading = useSelector((state) => state.albums.isLoading);
  const error = useSelector((state) => state.albums.error);

  return (
    <div className="fallback-container">
      {isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : null}
      {!isLoading && error !== "" ? error : null}
    </div>
  );
}
