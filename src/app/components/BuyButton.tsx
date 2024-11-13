// src/components/BuyButton.tsx
import React from "react";

interface BuyButtonProps {
  selectedPixelsCount: number;
  handlePurchase: () => void;
}

const BuyButton: React.FC<BuyButtonProps> = ({
  selectedPixelsCount,
  handlePurchase,
}) => {
  const totalPrice = selectedPixelsCount * 1; // 1 USD per pixel

  if (selectedPixelsCount === 0) return null;

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <p className="text-lg font-semibold">Total Price: ${totalPrice} USD</p>
      <button
        onClick={handlePurchase}
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
      >
        Buy Pixels
      </button>
    </div>
  );
};

export default BuyButton;
