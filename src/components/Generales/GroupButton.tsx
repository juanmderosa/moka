import React from "react";
import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";
import "../../styles/buttongroup.css";

export const GroupButton = () => {
  const scrollUp = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollDown = () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="button-group-container">
      <button
        id="prev-button"
        className="button-container"
        type="button"
        onClick={scrollDown}>
        <img
          src={rightArrow.src}
          alt="arrow-up"
          className="arrow-up"
        />
      </button>
      <button
        id="next-button"
        className="button-container"
        type="button"
        onClick={scrollUp}>
        <img
          src={leftArrow.src}
          alt="arrow-down"
          className="arrow-down"
        />
      </button>
    </div>
  );
};
