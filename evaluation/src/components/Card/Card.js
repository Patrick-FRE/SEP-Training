import "./Card.css";

export default function Card(props) {
  const { link, id, img, title } = props;
  return (
    <a href={link}>
      <div className="card-container">
        <img id={id} className="album-cover" src={img} alt="Album Cover"></img>
        <p>{title}</p>
      </div>
    </a>
  );
}
