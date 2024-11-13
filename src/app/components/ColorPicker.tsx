"use client";

import React from "react";

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  selectedColor,
  onColorChange,
}) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4">Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
        className="w-16 h-16 mb-4 cursor-pointer"
      />
      <div className="flex items-center">
        <span className="mr-2">Selected Color:</span>
        <div
          className="w-8 h-8 rounded"
          style={{ backgroundColor: selectedColor }}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;