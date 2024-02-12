import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userState = {
  user: string;
};

const initialState: userState = {
  user: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
