// CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // array of { name, image, description, cost, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // check if item exists by name
      const existing = state.items.find(i => i.name === newItem.name);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        // add with quantity default 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(i => i.name !== nameToRemove);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
