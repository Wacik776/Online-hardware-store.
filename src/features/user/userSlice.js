import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const initialState = {
  currentUser: null,
  cart: [],
  favourites: [],
  loading: false,
  formType: "signup",
  showForm: false,
};

const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const response = axios.post(`${BASE_URL}/users`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      let found = state.cart.find(({ id }) => id === payload.id);
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? { ...item, quantity: payload.quantity || item.quantity + 1 }
            : item;
        });
      } else newCart.push({ ...payload, quantity: 1 });
      state.cart = newCart;
    },
    addItemToFavourites: (state, { payload }) => {
      let newFav = [...state.favourites];
      let found = state.favourites.find((el) => el.id === payload.id);
      if (found) {
        newFav = newFav.map((el) => {
          return el.id === payload.id
            ? { ...el, quantity: payload.quantity || payload.quantity + 1 }
            : el;
        });
      } else {
        newFav.push({ ...payload, quantity: 1 });
      }
      state.favourites = newFav;
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
    });
  },
});

export const { addItemToCart, addItemToFavourites, toggleForm } = userSlice.actions;
export default userSlice.reducer;
