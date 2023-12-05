import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import searchtermReducer from "./searchtermSlice";
import searchResultReducer from './searchResultSlice'
import getIdReducer from './getIdSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    searchterm: searchtermReducer,
    searchResult: searchResultReducer,
    getID: getIdReducer
  }
})
export default store;