import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    allProduct: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.allProduct.push({...action.payload});
    },
    incrementQty: (state, action) => {
      const itemPresent = state.allProduct.find(
        item => item.id === action.payload.id,
      );
      itemPresent.quantity++;
    },
    decrementQty: (state, action) => {
      const itemPresent = state.allProduct.find(
        item => item.id === action.payload.id,
      );
      if (itemPresent.quantity == 1) {
        itemPresent.quantity = 0;
        const removeItem = state.allProduct.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeItem;
      } else {
        itemPresent.quantity--;
      }
    },
  },
});

export const {getProducts, incrementQty, decrementQty} = productSlice.actions;

export default productSlice.reducer;
