import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  select: string;
}

const initialState: InitialState = {
  select: "shipper",
};

const optionShipperSlice = createSlice({
  name: "optionShipper",
  initialState,
  reducers: {
    update(state, action: PayloadAction<string>) {
      state.select = action.payload;
    },
  },
});

export const { update } = optionShipperSlice.actions;
export default optionShipperSlice.reducer;
