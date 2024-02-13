import { Link } from "react-router-dom";

const Card = ({ name, likes, category, decreaseLikes, increaseLikes, removeCard }) => {
  return (
    <div className="card">
      <button className="cardclose" onClick={removeCard}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="cardimg">
        <img src={`https://source.unsplash.com/400x400/?${name}`} alt={`${name}`} />
      </div>
      <div className="cardcontent">
        <h2 className="cardheader">{name}</h2>
        <div className="cardvalue">
          <button className="cardvaluescore" onClick={decreaseLikes}>
            <span className="material-symbols-outlined">dislike</span>
          </button>
          <p className="cardvaluescore">
            <span className="material-symbols-outlined">{likes >= 0 ? "love" : "hate"}</span>
             <span>{likes}</span>
          </p>
          <button className="cardvalue-btn" onClick={increaseLikes}>
            <span className="material-symbols-outlined">like</span>
          </button>
        </div>
        <Link className="cardsee-more" to={`/${category}/${name}`}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;
