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
    <div className="flex flex-col items-center gap-2 w-full">
      <h2 className="text-lg font-bold mb-2">Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
        className="w-16 h-16 mb-4 cursor-pointer border rounded-lg"
      />
      <div className="flex items-center gap-2">
        <span>Selected:</span>
        <div
          className="w-8 h-8 rounded transition-all duration-200 hover:bg-gray-200"
          style={{
            backgroundColor: selectedColor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;
