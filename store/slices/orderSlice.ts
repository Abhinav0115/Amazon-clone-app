import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";

interface Orderprops {
    order: any;
}

const initialState: Orderprops = {
    order: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addToOrder: (state, action) => {
            state.order = action.payload;

        },

        totalPrice: (state) => {
            return state.order.reduce((acc: number, item: any) => {
                return acc + item.price * item.quantity;
            }, 0);
        },

        clearOrder: (state) => {
            state.order = [];
        },

        // orderLength: (state) => {
        //     return state.order.length;
        // },
    },
});

export const {
    addToOrder,
    clearOrder,
    // orderLength,
} = orderSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getOrder = (state: RootState) => state.order.order;

export default orderSlice.reducer;
