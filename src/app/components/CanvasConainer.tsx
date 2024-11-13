"use client";

import React, { useState } from "react";
import PixelGrid from "./PixelGrid";
import ColorPicker from "./ColorPicker";

const CanvasContainer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black

  return (
    <div className="flex flex-row py-8 justify-center">
      <PixelGrid selectedColor={selectedColor} />
      <ColorPicker
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
    </div>
  );
};

export default CanvasContainer;
