import Album from "./Album";
const albumList = (props) => {
  const { albums } = props;
  return (
    <section>
      {albums.length > 0
        ? albums.map((album) => {
            return <Album album={album}></Album>;
          })
        : null}
    </section>
  );
};

export default albumList;
