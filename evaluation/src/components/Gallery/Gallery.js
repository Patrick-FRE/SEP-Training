import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Gallery.css";
import Card from "../Card/Card";

export default function Gallery() {
  const albums = useSelector((state) => state.albums);
  const location = useLocation();
  console.log(location);

  return (
    <section id="album-gallery">
      {albums.length && location.search
        ? albums.map((album) => (
            <Card
              link={album.collectionViewUrl}
              id={album.collectionId}
              img={album.artworkUrl100}
              title={album.collectionName}
            ></Card>
          ))
        : null}
    </section>
  );
}
