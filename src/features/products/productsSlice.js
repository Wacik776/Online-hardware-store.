import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { shuffle } from "../../utils/common";

export const getProducts = createAsyncThunk(
  "products/getproducts",
  async (_, thunkApi) => {
    try {
      const response = await axios(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [], //хранение всех товаров
    filtered: [],
    related: [],
    isLoadind: false,
    error: false,
  },
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => price < payload);
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter((el) => Number(el.category.id) == payload);
      state.related = shuffle(list)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoadind = true;
      state.error = false;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoadind = false;
      state.error = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoadind = false;
      state.error = true;
    });
  },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;
export default productsSlice.reducer;
