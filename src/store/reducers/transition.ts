import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toPortifolio: false,
  displayNone: false,
};

const IransitionSlice = createSlice({
  name: "TransitionEvent",
  initialState,
  reducers: {
    toPortifolio: (state) => {
      state.toPortifolio = true;
    },
    toDisplayNon: (state) => {
      state.displayNone = true;
    },
  },
});

export const { toPortifolio, toDisplayNon } = IransitionSlice.actions;

export default IransitionSlice.reducer;
