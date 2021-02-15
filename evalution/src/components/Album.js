import "./album.scss";

const Album = (props) => {
  const { artworkUrl100, collectionName } = props.album;
  return (
    <div>
      <img src={artworkUrl100} alt="album cover"></img>
      <div>{collectionName}</div>
    </div>
  );
};

export default Album;
