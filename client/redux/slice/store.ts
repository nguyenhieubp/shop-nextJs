import { configureStore } from "@reduxjs/toolkit";
import optionAdmin from "./optionAdmin";
import optionShipper from "./optionShipper";
import shipper from "./shipper/shipper";
import admin from "./admin/admin";
import user from "./user/user";

const store = configureStore({
  reducer: {
    optionAdmin,
    optionShipper,
    shipper,
    admin,
    user,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
