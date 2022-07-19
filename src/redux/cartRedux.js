import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeItem: (state, action) => {
      const itemId = action.payload.id;
      state.products = state.products.filter(
        (product) => product._id !== itemId
      );
      state.quantity = state.quantity - 1;
      state.total -= action.payload.price * action.payload.quantity;
    },
    reset: (state, initialState) =>
      Object.assign(state, {
        products: [],
        quantity: 0,
        total: 0,
      }),

    increase: (state, action) => {
      const ItemId = action.payload;
      console.log(ItemId);
      const cartItem = state.products.find((item) => {
        return item._id === ItemId;
      });

      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, action) => {
      const ItemId = action.payload;
      console.log(ItemId);
      const cartItem = state.products.find((item) => {
        return item._id === ItemId;
      });

      cartItem.quantity = cartItem.quantity - 1;
    },
  },
});

export const { addProduct, removeItem, reset, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
