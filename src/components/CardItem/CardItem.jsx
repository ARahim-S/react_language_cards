import { useState } from "react";
import "./CardItem.css";
const CardItem = ({ item }) => {
  const [showLogo, setShowLogo] = useState(true);

  const handleClick = () => {
    setShowLogo((prevState) => !prevState);
  };
  return (
    <div className="card" onClick={handleClick}>
      {showLogo ? (
        <div className="card-front">
          <div>{item.img}</div>
          <h2 className="language-title">{item.name}</h2>
        </div>
      ) : (
        <div className="card-back">
          <ul>
            {item.options.map((a, index) => {
              return <li key={index}>{a}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardItem;
