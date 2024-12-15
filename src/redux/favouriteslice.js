/** @format */

import { createSlice } from "@reduxjs/toolkit";

//initialstate
const initialState = { Favourites: [] };

const FavouriteSlice = createSlice({
  name: "Favourite",
  initialState,
  reducers: {
    addNewFavourite: (state, action) => {
      const itemIndex = state.Favourites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        state.Favourites.push(action.payload);
      }
    },
    DeleteOneFavourite: (state, action) => {
      state.Favourites = state.Favourites.filter((item, index) => {
        return index !== action.payload;
      });
    },
  },
});
export const { addNewFavourite, DeleteOneFavourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;
