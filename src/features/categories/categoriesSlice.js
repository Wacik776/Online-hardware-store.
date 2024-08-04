import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getCategories = createAsyncThunk(
  "categories/getcategories",
  async (_, thunkApi) => {
    try {
      const res = await axios(`${BASE_URL}/categories`);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    isLoadind: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoadind = true;
      state.error = false;
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoadind = false;
      state.error = false;
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoadind = false;
      state.error = true;
    });
  },
});

export default categoriesSlice.reducer;
