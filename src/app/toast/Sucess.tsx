"use client";

import { toast } from "react-toastify";

export const successToast = () => {
  toast.success("Payment Successful! Your pixels are being minted on the blockchain. You will receive an email once completed.");
};
