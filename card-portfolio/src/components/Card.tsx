import React, { useState } from "react";
import "../styles/Card.css";

interface CardProps {
  cover: string;
  // title: string;
  character: string;
}

const Card: React.FC<CardProps> = ({ cover, character }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <a href="#">
        <div
          className={`card ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <div className="wrapper">
            <img src={cover} className="cover-image" />
          </div>
          {/* <img src={title} className="title" /> */}
          <img src={character} className="character" />
        </div>
      </a>
    </div>
  );
};

export default Card;
