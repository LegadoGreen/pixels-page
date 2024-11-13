import { create } from "zustand";

interface PixelStore {
  selectedPixels: Map<string, string>;
  setPixelColor: (id: string, color: string) => void;
}

export const usePixelStore = create<PixelStore>((set) => ({
  selectedPixels: new Map(),
  setPixelColor: (id, color) =>
    set((state) => {
      const newMap = new Map(state.selectedPixels);
      newMap.set(id, color);
      return { selectedPixels: newMap };
    }),
}));
