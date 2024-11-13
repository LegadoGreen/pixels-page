"use client";

import React from "react";

interface BuyButtonProps {
  totalPrice: number;
  selectedColor: string;
}

// Function to convert hex color to RGB
const hexToRgb = (hex: string) => {
  let r: number = 0,
    g: number = 0,
    b: number = 0;

  // 3 digits (e.g. #03F)
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits (e.g. #0033FF)
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return { r, g, b };
};

// Function to calculate luminance
const luminance = (r: number, g: number, b: number) => {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// Function to determine if the text color should be dark or light
const getTextColor = (hexColor: string) => {
  const { r, g, b } = hexToRgb(hexColor);
  const lum = luminance(r, g, b);
  return lum > 0.5 ? "black" : "white"; // Luminance threshold for contrast
};

const BuyButton: React.FC<BuyButtonProps> = ({ totalPrice, selectedColor }) => {
  const textColor = getTextColor(selectedColor);

  const handleBuy = () => {
    alert(`Thank you for your purchase! Total: $${totalPrice} USD`);
  };

  return (
    <button
      onClick={handleBuy}
      className="px-4 py-2 rounded-lg shadow-md transition"
      style={{ backgroundColor: selectedColor, color: textColor }}
    >
      Buy Now
    </button>
  );
};

export default BuyButton;
