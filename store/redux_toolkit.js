import { configureStore, createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "scores",
  initialState: {
    teamA: 0,
    teamB: 0,
  },
  reducers: {
    increaseTeamA: (state) => {
      state.teamA += 1;
    },
    decreaseTeamA: (state) => {
      state.teamA -= 1;
    },
    increaseTeamB: (state) => {
      state.teamB += 1;
    },
    decreaseTeamB: (state) => {
      state.teamB -= 1;
    },
  },
});

export const { increaseTeamA, decreaseTeamA, increaseTeamB, decreaseTeamB } =
  scoreSlice.actions;

export const store = configureStore({
  reducer: {
    scores: scoreSlice.reducer,
  },
});
