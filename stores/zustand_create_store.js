import { createStore } from "zustand";

// interface GlobalState {
//   teamA: number;
//   teamB: number;
//   increaseTeamAScore: () => void;
//   decreaseTeamAScore: () => void;
//   increaseTeamBScore: () => void;
//   decreaseTeamBScore: () => void;
// }

// Zustand store creation with createStore.
export const createGlobalStore = createStore((set) => {
  console.log("create glocal store");

  return {
    teamA: 0,
    teamB: 0,
    increaseTeamAScore: () => set((state) => ({ teamA: state.teamA + 1 })),
    decreaseTeamAScore: () => set((state) => ({ teamA: state.teamA - 1 })),
    increaseTeamBScore: () => set((state) => ({ teamB: state.teamB + 1 })),
    decreaseTeamBScore: () => set((state) => ({ teamB: state.teamB - 1 })),
  };
});
