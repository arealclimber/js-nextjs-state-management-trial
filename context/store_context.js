import { createContext, useState, useContext, useEffect } from "react";
import { useGlobalStore } from "@/stores/zustand";

const Context = createContext(null);

const useStore = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const { increaseTeamAScore } = useGlobalStore();

  const resetZustand = () => {
    console.log("resetZustand called");
    increaseTeamAScore();
    increaseTeamAScore();
    increaseTeamAScore();
    increaseTeamAScore();
    increaseTeamAScore();
  };

  useEffect(() => {
    resetZustand();
  }, []);

  return {
    teamA, // Team A's score
    teamB, // Team B's score
    increaseTeamAScore: () => setTeamA((v) => v + 1), // Increase Team A's score by one
    decreaseTeamAScore: () => setTeamA((v) => v - 1), // Decrease Team A's score by one
    increaseTeamBScore: () => setTeamB((v) => v + 1), // Increase Team B's score by one
    decreaseTeamBScore: () => setTeamB((v) => v - 1), // Decrease Team B's score by one
  };
};

const StoreContextProvider = ({ children }) => {
  return (
    <Context.Provider value={useStore()} r>
      {children}
    </Context.Provider>
  );
};

export const useStoreContext = () => useContext(Context);

export default StoreContextProvider;
