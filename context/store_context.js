import { createContext, useState, useContext, useEffect } from "react";
import { useGlobalStore } from "@/stores/zustand";

const Context = createContext(null);

const useStore = () => {
  // const [teamA, setTeamA] = useState(0);
  // const [teamB, setTeamB] = useState(0);

  const [
    teamA,
    teamB,
    increaseTeamAScore,
    decreaseTeamAScore,
    increaseTeamBScore,
    decreaseTeamBScore,
  ] = useGlobalStore((state) => [
    state.teamA,
    state.teamB,
    state.increaseTeamAScore,
    state.decreaseTeamAScore,
    state.increaseTeamBScore,
    state.decreaseTeamBScore,
  ]);

  console.log("use store in React Context 沒有用，一樣浪費效能");

  // const { increaseTeamAScore } = useGlobalStore();
  // const resetZustand = () => {
  //   console.log("resetZustand called");
  //   increaseTeamAScore();
  //   increaseTeamAScore();
  //   increaseTeamAScore();
  //   increaseTeamAScore();
  //   increaseTeamAScore();
  // };
  // useEffect(() => {
  //   resetZustand();
  // }, []);

  return {
    teamA, // Team A's score
    teamB, // Team B's score
    increaseTeamAScore,
    decreaseTeamAScore,
    increaseTeamBScore,
    decreaseTeamBScore,
    // increaseTeamAScore: () => setTeamA((v) => v + 1), // Increase Team A's score by one
    // decreaseTeamAScore: () => setTeamA((v) => v - 1), // Decrease Team A's score by one
    // increaseTeamBScore: () => setTeamB((v) => v + 1), // Increase Team B's score by one
    // decreaseTeamBScore: () => setTeamB((v) => v - 1), // Decrease Team B's score by one
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
