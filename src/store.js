import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./components/Search/SearchSlice";
import PageReducer from "./components/Page/PageSlice";
import CreateReducer from "./components/Create/CreateSlice";
import DeleteReducer from "./components/Delete/DeleteSlice";

export const store = configureStore({
  reducer: {
    searchState: SearchReducer,
    page: PageReducer,
    createState: CreateReducer,
    deleteState: DeleteReducer,
  },
});
