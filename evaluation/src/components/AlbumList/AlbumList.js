import React from "react";

import { Album } from "../Album/Album";

import "./AlbumList.css";

const AlbumList = ({ albums}) => {

  return (
    <div>
     { <div className="card-list">
        {albums.map((album) => (
          <Album key={album.collectionId} album={album}  />
        ))}
      </div>}
    </div>
  );
};

export default AlbumList