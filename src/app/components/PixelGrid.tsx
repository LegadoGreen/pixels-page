"use client";

import React, { useState } from "react";
import { usePixelStore } from "../store/usePixelStore";

interface PixelGridProps {
  selectedColor: string;
}

const GRID_SIZE = 100;
const PIXEL_SIZE = 12;

const PixelGrid: React.FC<PixelGridProps> = ({ selectedColor }) => {
  const { selectedPixels, setPixelColor } = usePixelStore();
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (x: number, y: number) => {
    setIsDragging(true);
    setPixelColor(`${x}-${y}`, selectedColor);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseEnter = (x: number, y: number) => {
    if (isDragging) {
      setPixelColor(`${x}-${y}`, selectedColor);
    }
  };

  return (
    <div
      className="grid shadow-lg rounded-lg border"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
        width: `${GRID_SIZE * PIXEL_SIZE}px`,
        height: `${GRID_SIZE * PIXEL_SIZE}px`,
      }}
      onMouseLeave={handleMouseUp}
    >
      {Array.from({ length: GRID_SIZE ** 2 }, (_, index) => {
        const x = index % GRID_SIZE;
        const y = Math.floor(index / GRID_SIZE);
        const id = `${x}-${y}`;
        const color = selectedPixels.get(id) || "#f0f0f0";

        return (
          <div
            key={id}
            onMouseDown={() => handleMouseDown(x, y)}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => handleMouseEnter(x, y)}
            className="cursor-pointer transition-all duration-150"
            style={{
              backgroundColor: color,
              width: `${PIXEL_SIZE}px`,
              height: `${PIXEL_SIZE}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default PixelGrid;
