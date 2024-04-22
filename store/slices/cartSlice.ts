import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface Cartprops {
    cart: any;
}

const initialState: Cartprops = {
    cart: [],
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isPresent = state.cart.find((item: any) => {
                return item.id === action.payload.id;
            });

            if (isPresent) {
                state.cart = state.cart.map((item: any) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item: any) => item.id !== action.payload
            );
        },

        incrementQuantity: (state, action) => {
            state.cart = state.cart.map((item: any) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decrementQuantity: (state, action) => {
            state.cart = state.cart.map((item: any) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },

        clearCart: (state) => {
            state.cart = [];
        },

        // cartLength: (state) => {
        //     return state.cart.length;
        // },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    // cartLength,
} = CartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getCart = (state: RootState) => state.cart.cart;

export default CartSlice.reducer;
