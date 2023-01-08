import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../../models/product";

export interface ProductRoot {
  product: Product;
  color: string;
  quantity: number;
  size: string;
}

interface InitialState {
  search: String;
  products: ProductRoot[];
  isSuccess: Boolean;
}

const initialState: InitialState = {
  products: [],
  search: "",
  isSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<ProductRoot>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products.splice(action.payload, 1);
    },
    search: (state, action: PayloadAction<String>) => {
      state.search = action.payload;
    },
    setSuccess: (state) => {
      state.isSuccess = true;
    },
  },
});

export const totalPrice = (state: any) =>
  state.user.products.reduce(
    (total: number, item: ProductRoot) =>
      (total += item.product.price * item.quantity),
    0
  );

export const { addStore, search, removeProduct, setSuccess } =
  userSlice.actions;
export default userSlice.reducer;
