import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: []
}

const cartSlice = createSlice({ // each slice has 3 properties: name, initialState, reducers
    name: 'cart',
    initialState,
    reducers: { // combination of multiple actions that we will be having 
        addToCart(state, action) {
            console.log(state, action); // 'state' = object , 'action' will consist of 'type' i.e. 'addToCart' and 'payload' = current item
            state.cartItems.push(action.payload)
        },
        removeFromCart(state, action) {
            let cpyCartItems = [...state.cartItems]
            cpyCartItems = cpyCartItems.filter(item => item.id !== action.payload)
            state.cartItems = cpyCartItems

            return state
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer