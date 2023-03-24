import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, image } = action.payload;
            const products = state.find((products) => products.id === id);

            if (products) {
                products.quantity++;
            } else {
                state.push({
                    id,
                    title,
                    price,
                    image,
                    quantity: 1
                })
            }
        },
        removeFromCart: (state, action) => {

            // const { id } = action.payload;
            const products = state.find((products) => products.id === action.payload);

            if (products.quantity > 1) {
                products.quantity--;
            } else {
                return state.filter((products) => products.id !== action.payload);
            }

        },
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;