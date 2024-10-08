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

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      return response.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios.get(`${BASE_URL}/auth/profile `, {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`,
        },
      });
      return login.data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

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
    removeItemFromCart: (state, {payload})=>{
      state.cart = state.cart.filter(({id})=>id!==payload)
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(loginUser.fulfilled, addCurrentUser);
    builder.addCase(updateUser.fulfilled, addCurrentUser);
  },
});

export const { addItemToCart, addItemToFavourites, toggleForm, toggleFormType, removeItemFromCart } =
  userSlice.actions;
export default userSlice.reducer;
