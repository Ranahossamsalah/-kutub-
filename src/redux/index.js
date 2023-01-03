import { configureStore } from '@reduxjs/toolkit'
import EventSlice from './eventslice';
import BookSlice from './cartslice';
import FavouriteSlice from './favouriteslice';

export const store = configureStore({
  reducer:{
    Reducer:EventSlice,
    BReducer:BookSlice,
    FReducer:FavouriteSlice
  } 
})