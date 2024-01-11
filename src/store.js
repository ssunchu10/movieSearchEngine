import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./components/Search/SearchSlice";
import PageReducer from "./components/Page/PageSlice"

export const store = configureStore({
  reducer: {
    searchState: SearchReducer,
    pageState: PageReducer
  },
});
