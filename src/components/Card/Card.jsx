import { languages } from "../../helpers/data";
import CardItem from "../CardItem/CardItem";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 style={{ color: "white", textAlign: "center", padding: "1rem" }}>
        Programming Languages
      </h1>
      <div className="cards-container">
        {languages.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
