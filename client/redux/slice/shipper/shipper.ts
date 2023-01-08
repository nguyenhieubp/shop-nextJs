import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Receipt from "../../../models/receipt";

interface Address {
  city: string;
  district: string;
  ward: string;
  village: string;
}

export interface Shipper {
  address: Address;
  _id: string;
  email: string;
  avatar: string;
  phone: number;
  name: string;
}

interface InitialState {
  shipper: Shipper | null;
  listShipper: Array<Shipper>;
  listReceipt: Array<Receipt>;
}

const initialState: InitialState = {
  shipper: null,
  listShipper: [],
  listReceipt: [],
};

export const shipperCurrent = createAsyncThunk(
  "shipper/shipperCurrent",
  async ({ token }: { token: string | null }) => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/auth/shipper/checkCurrentShipper`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const { shipper } = response.data;
    return shipper;
  }
);

export const getAllShipper = createAsyncThunk(
  "shipper/getAllShipper",
  async ({ token }: { token: string | null }) => {
    const response = await axios.get(
      `http://localhost:3000/api/v1/auth/shipper`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.shippers;
  }
);

export const getReceipt = createAsyncThunk(
  "shipper/getReceipt",
  async ({ token }: { token: string | null }) => {
    const receipt = await axios.get(
      `http://localhost:3000/api/v1/billRoot/shipper`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return receipt.data.receipt;
  }
);

const shipperSlice = createSlice({
  name: "shipper",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //Login success
    builder.addCase(
      shipperCurrent.fulfilled,
      (state, action: PayloadAction<Shipper>) => {
        state.shipper = action.payload;
      }
    );
    //list shipper
    builder.addCase(
      getAllShipper.fulfilled,
      (state, action: PayloadAction<Shipper[]>) => {
        state.listShipper = action.payload;
      }
    );
    //list receipt
    builder.addCase(
      getReceipt.fulfilled,
      (state, action: PayloadAction<Receipt[]>) => {
        state.listReceipt = action.payload;
      }
    );
  },
});

export default shipperSlice.reducer;
