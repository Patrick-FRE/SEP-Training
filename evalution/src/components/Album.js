const Album = (props) => {
  const { artworkUrl100, collectionName } = props.album;
  console.log(props, artworkUrl100, collectionName);
  return (
    <div>
      <img src={artworkUrl100} alt="album cover"></img>
      <span>{collectionName}</span>
    </div>
  );
};

export default Album;
