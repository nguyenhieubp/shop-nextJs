import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import Receipt from "../../../models/receipt";
import BillRoot from "../../../models/bill";
import { Product } from "../../../models/receipt";

interface InitialState {
  idReceipt: string | undefined;
  billRoots: Array<BillRoot>;
  receipts: Array<Receipt>;
  products: Array<Product>;
}

const initialState: InitialState = {
  idReceipt: "",
  billRoots: [],
  receipts: [],
  products: [],
};

export const getReceipt = createAsyncThunk("admin/getReceipt", async () => {
  const response = await axios.get(`http://localhost:3000/api/v1/receipt`);
  return response.data.receipts;
});

export const getAllBill = createAsyncThunk("admin/getAllBill", async () => {
  const response = await axios.get(`http://localhost:3000/api/v1/billRoot`);
  return response.data.billRoots;
});

export const getAllProduct = createAsyncThunk(
  "admin/getAllProduct",
  async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/product`);
    return response.data.products;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    saveReceiptId: (state, action: PayloadAction<string>) => {
      state.idReceipt = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      getReceipt.fulfilled,
      (state, action: PayloadAction<Array<Receipt>>) => {
        state.receipts = action.payload;
      }
    );
    builder.addCase(
      getAllBill.fulfilled,
      (state, action: PayloadAction<Array<BillRoot>>) => {
        state.billRoots = action.payload;
      }
    );
    builder.addCase(
      getAllProduct.fulfilled,
      (state, action: PayloadAction<Array<Product>>) => {
        state.products = action.payload;
      }
    );
  },
});

export const { saveReceiptId } = adminSlice.actions;

export default adminSlice.reducer;
