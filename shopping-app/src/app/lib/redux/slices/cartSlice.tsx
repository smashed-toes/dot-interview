import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductWithQuantity } from "@/components/ProductType";

export interface CartState {
  cart: ProductWithQuantity[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  cartQuantity: number;
}

export type quantityChangePayload = {
  id: string;
  quantity: number;
};

const initialState: CartState = {
  cart: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  total: 0,
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductWithQuantity>) => {
      const newItem = action.payload;
      const inCart = state.cart.find((p) => p.id === newItem.id);
      if (inCart) {
        state.cart = state.cart.map((p) => {
          if (p.id === inCart.id) {
            return { ...p, quantity: p.quantity + newItem.quantity };
          } else {
            return p;
          }
        });
      } else {
        state.cart = [...state.cart, newItem];
      }
      cartSlice.caseReducers.updatePrice(state);
    },
    changeQuantity: (state, action: PayloadAction<quantityChangePayload>) => {
      const itemInfo = action.payload;
      if (itemInfo.quantity === 0) {
        state.cart = state.cart.filter((p) => itemInfo.id !== p.id);
      } else {
        state.cart = state.cart.map((p) =>
          p.id === itemInfo.id ? { ...p, quantity: itemInfo.quantity } : p
        );
      }
      cartSlice.caseReducers.updatePrice(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const removedItemId = action.payload;
      state.cart = state.cart.filter((p) => removedItemId !== p.id);
      cartSlice.caseReducers.updatePrice(state);
    },
    updatePrice: (state) => {
      state.subtotal = Number(
        state.cart.reduce((acc, p) => acc + p.price * p.quantity, 0).toFixed(2)
      );
      state.shipping = state.cart.length > 0 ? 20 : 0;
      state.tax = Number((state.subtotal * 0.0725).toFixed(2));
      state.total = Number(
        (state.subtotal + state.shipping + state.tax).toFixed(2)
      );
      state.cartQuantity = state.cart.reduce((acc, p) => acc + p.quantity, 0);
    },
  },
});

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
