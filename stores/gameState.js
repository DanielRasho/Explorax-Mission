import { create } from "zustand";

const useGameState = create((set) => ({
  currentLevel: 0,
  numLevels: 0,
  score: 0,
  incrementLevel: () =>
    set((state) => ({ currentLevel: state.currentLevel + 1 })),
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
  setNumLevels: (state) => set({ numLevels: state }),
}));

export { useGameState };
