"use client";

import React, { useState } from "react";
import PixelGrid from "./PixelGrid";
import ColorPicker from "./ColorPicker";
import BuyButton from "./BuyButton";
import { usePixelStore } from "../store/usePixelStore";

const CanvasContainer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("#000000"); // Default color is black
  const { selectedPixels } = usePixelStore();

  const selectedCount = selectedPixels.size;
  const totalPrice = selectedCount * 1; // 1 USD per square

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-6 py-8 px-4">
      {/* Left panel (PixelGrid) */}
      <div className="flex-grow w-full">
        <PixelGrid selectedColor={selectedColor} />
      </div>

      {/* Right panel (Color Picker and Buy Button) */}
      <div className="w-full mt-6 lg:mt-0 xl:ml-7">
        <div className="flex flex-col items-center gap-4">
          <ColorPicker selectedColor={selectedColor} onColorChange={setSelectedColor} />
          {selectedCount > 0 && (
            <div className="text-center">
              <p className="text-lg font-semibold">Total: ${totalPrice} USD</p>
              <BuyButton selectedColor={selectedColor} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CanvasContainer;
