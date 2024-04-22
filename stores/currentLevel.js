import { create } from "zustand";

const useGameState = create((set) => ({
  currentLevel: 0,
  numLevels: 0,
  incrementLevel: () => set((state) => ({ navigate: state.currentLevel + 1 })),
  setNumLevels: (state) => set({ numLevels: state }),
}));

export { useGameState };
