import React, { useState, useRef, useEffect } from "react";
import "../styles/Card.css";

interface CardProps {
  cover: string;
  character: string;
}

const Card: React.FC<CardProps> = ({ cover, character }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleCardClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <a href="#">
        <div
          ref={cardRef}
          className={`card ${isActive ? "active" : ""}`}
          onClick={handleCardClick}
        >
          <div className="wrapper">
            <img src={cover} className="cover-image" />
          </div>
          <img src={character} className="character" />
        </div>
      </a>
    </div>
  );
};

export default Card;
