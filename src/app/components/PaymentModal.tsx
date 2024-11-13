import React, { useState, useEffect } from "react";
import Modal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  message: string;
}

const PaymentModal: React.FC<ModalProps> = ({ isOpen, closeModal, message }) => {
  const [dots, setDots] = useState("");

  // Animate the "Processing payment..." text by adding dots
  useEffect(() => {
    if (message === "Processing payment...") {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length < 3 ? prev + "." : ""));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [message]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Payment Modal"
      appElement={document.getElementById("root") || document.body}
      className="modal-container max-w-lg w-full p-6"
      overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">Payment Processing</h2>
        <p className="mt-4 text-center">
          {message}
          {message === "Processing payment..." && (
            <span className="animate-pulse">{dots}</span>
          )}
        </p>
      </div>
    </Modal>
  );
};

export default PaymentModal;
