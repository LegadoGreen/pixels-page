"use client";

import React, { useState, useEffect } from "react";
import { usePixelStore } from "../store/usePixelStore";

interface PixelGridProps {
  selectedColor: string;
}

const GRID_SIZE = 100;

const PixelGrid: React.FC<PixelGridProps> = ({ selectedColor }) => {
  const { selectedPixels, setPixelColor } = usePixelStore();
  const [isDragging, setIsDragging] = useState(false);
  const [pixelSize, setPixelSize] = useState(12);

  // Adjust pixel size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newPixelSize = width < 640 ? 6 : width < 1024 ? 10 : 12;
      setPixelSize(newPixelSize);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (x: number, y: number, e: React.MouseEvent) => {
    // Prevent dragging of pixels
    e.preventDefault(); // Prevent default behavior of mouse events (e.g., image dragging)

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

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault(); // Prevent drag action on the pixels
  };

  return (
    <div
      className="grid shadow-lg rounded-lg border"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, ${pixelSize}px)`,
        width: `${GRID_SIZE * pixelSize}px`,
        height: `${GRID_SIZE * pixelSize}px`,
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
            onMouseDown={(e) => handleMouseDown(x, y, e)}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => handleMouseEnter(x, y)}
            onDragStart={handleDragStart} // Prevent drag behavior on the pixel
            className="cursor-pointer transition-all duration-150"
            style={{
              backgroundColor: color,
              width: `${pixelSize}px`,
              height: `${pixelSize}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default PixelGrid;
