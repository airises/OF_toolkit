import { createSlice } from "@reduxjs/toolkit";
import { getFoods } from "./mealsThunk";

const initialState = {
  meals: [],
  isLoading: false,
  isError: "",
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFoods.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.isError = "";
        state.isLoading = false;
      })
      .addCase(getFoods.pending, (state) => {
        state.meals = [];
        state.isError = "";
        state.isLoading = true;
      })
      .addCase(getFoods.rejected, (state, action) => {
        state.meals = [];
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});
