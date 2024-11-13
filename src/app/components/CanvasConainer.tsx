"use client";

import React, { useState } from "react";
import PixelGrid from "./PixelGrid";
import ColorPicker from "./ColorPicker";
import BuyButton from "./BuyButton";
import { usePixelStore } from "../store/usePixelStore";

const CanvasContainer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const { selectedPixels } = usePixelStore();

  const selectedCount = selectedPixels.size;
  const totalPrice = selectedCount * 1; // 1 USD per square

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-8 px-4">
      <PixelGrid selectedColor={selectedColor} />
      <div className="flex flex-col items-center gap-4 w-full lg:w-1/4">
        <ColorPicker
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />
        {selectedCount > 0 && (
          <div className="text-center">
            <p className="text-lg font-semibold">Total: ${totalPrice} USD</p>
            <BuyButton totalPrice={totalPrice} selectedColor={selectedColor} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CanvasContainer;
