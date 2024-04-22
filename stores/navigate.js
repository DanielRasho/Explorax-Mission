import { create } from "zustand";

const useNavigateWithTransition = create((set) => ({
  navigate: () => {},
  setNavigate: (newNavigation) => set({ navigate: newNavigation }),
}));

export { useNavigateWithTransition };
