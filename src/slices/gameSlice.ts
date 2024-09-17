import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WIN_PATTERNS } from "../tools/constants";

interface GameState {
  winner: string;
  currentPlayer: string;
  isGameEnded: boolean;
  isDraw: boolean;
  field: string[];
}

const initialState: GameState = {
  winner: "",
  currentPlayer: "x",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
};

const checkWinner = (field: string[], current: string) => {
  const currentIndexes: number[] = [];
  for (let i = 0; i < field.length; i++) {
    if (field[i] === current) currentIndexes.push(i);
  }

  for (const pattern of WIN_PATTERNS) {
    if (pattern.every((item, index) => item === currentIndexes[index])) {
      return true;
    }
  }

  return false;
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<number>) => {
      state.field = state.field.map((item, index) => {
        if (index === action.payload) item = state.currentPlayer;
        return item;
      });

      if (checkWinner(state.field, state.currentPlayer)) {
        console.log("win " + state.currentPlayer);
        state.winner = state.currentPlayer;
        state.isGameEnded = true;
      }

      if (
        !checkWinner(state.field, state.currentPlayer) &&
        state.field.every((item) => item !== "")
      ) {
        console.log("is Draw!");
        state.isDraw = true;
      }

      state.currentPlayer = state.currentPlayer === "x" ? "0" : "x";
    },
  },
});

export const { changeField } = gameSlice.actions;
export default gameSlice.reducer;
