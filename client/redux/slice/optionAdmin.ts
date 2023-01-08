import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  select: string;
}

const initialState: InitialState = {
  select: "receipt",
};

const selectOptionAdmin = createSlice({
  name: "optionAdmin",
  initialState,
  reducers: {
    updateOption: (state, action: PayloadAction<string>) => {
      state.select = action.payload;
    },
  },
});

export const { updateOption } = selectOptionAdmin.actions;
export default selectOptionAdmin.reducer;
