import { create } from "zustand";

interface PixelState {
  selectedPixels: Map<string, string>;
  setPixelColor: (id: string, color: string) => void;
}

export const usePixelStore = create<PixelState>((set) => ({
  selectedPixels: new Map(),

  setPixelColor: (id: string, color: string) => {
    set((state) => {
      const updatedPixels = new Map(state.selectedPixels);
      updatedPixels.set(id, color);
      return { selectedPixels: updatedPixels };
    });
  },
}));
