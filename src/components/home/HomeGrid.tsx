import React, { useEffect, useRef, useCallback } from "react";
import "../../styles/app.css";

const colors: string[] = ["#3974ba", "#5fa7dc", "#8ac1ea", "#a2c7ea"];

export const HomeGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getSquareSize = useCallback((): number => {
    if (window.innerWidth < 768) return window.innerWidth / 7;
    if (window.innerWidth < 1024) return window.innerWidth / 9;
    return window.innerWidth / 13;
  }, []);

  const createGrid = useCallback(() => {
    const container = containerRef.current;
    const squareSize = getSquareSize();
    const gap = 4;

    const containerWidth = window.innerWidth * 0.5; // Adjust for 50% width
    const containerHeight = window.innerHeight;

    const squaresPerRow = Math.floor(
      (containerWidth + gap) / (squareSize + gap)
    );
    const squaresPerColumn = Math.floor(
      (containerHeight + gap) / (squareSize + gap)
    );

    if (container) {
      container.style.gridTemplateColumns = `repeat(${squaresPerRow}, ${squareSize}px)`;
      container.style.gridTemplateRows = `repeat(${squaresPerColumn}, ${squareSize}px)`;
      container.innerHTML = ""; // Clear previous squares

      let colorIndex = 0;
      for (let i = 0; i < squaresPerRow * squaresPerColumn; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;

        const innerDiv = document.createElement("div");
        square.appendChild(innerDiv);

        container.appendChild(square);
      }
    }
  }, [getSquareSize]);

  const addRandomAnimation = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const squares = container.querySelectorAll<HTMLDivElement>(".square");
      const randomIndex = Math.floor(Math.random() * squares.length);
      const randomSquare = squares[randomIndex];

      // Add the animation class to the random square
      randomSquare.classList.add("pulse-animation");

      // Wait for the animation to end and then remove the class
      randomSquare.addEventListener("animationend", () => {
        randomSquare.classList.remove("pulse-animation");
      });
    }
  }, []);

  /*  const addWordToGrid = useCallback((word: string) => {
    const container = containerRef.current;
    if (container) {
      const squares = container.querySelectorAll<HTMLDivElement>(".square");

      const squaresPerRow =
        window.innerWidth < 768 ? 6 : window.innerWidth < 1024 ? 8 : 12;

      const startIdx = Math.floor((squares.length - word.length) / 2);
      const rowStart = Math.floor(startIdx / squaresPerRow);
      const colStart = Math.floor((squaresPerRow - word.length) / 2);

      for (let i = 0; i < word.length; i++) {
        const row = rowStart;
        const col = colStart + i;
        const idx = row * squaresPerRow + col;
        if (squares[idx]) {
          squares[idx].querySelector("div")!.textContent = word[i];
        }
      }
    }
  }, []); */

  const animateRandomSquare = useCallback(() => {
    addRandomAnimation();
    requestAnimationFrame(animateRandomSquare);
  }, [addRandomAnimation]);

  useEffect(() => {
    createGrid();
    window.addEventListener("resize", () => {
      createGrid();
      /*       addWordToGrid("MOKA");
       */
    });

    /*     addWordToGrid("MOKA");
     */
    // Start the animation
    animateRandomSquare();

    return () => {
      window.removeEventListener("resize", () => {
        createGrid();
      });
    };
  }, [createGrid, animateRandomSquare]);

  return (
    <div
      id="grid-container"
      ref={containerRef}></div>
  );
};
