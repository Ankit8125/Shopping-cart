// handles middlewares and all the reducers that we create and it will combing multiple reducers

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/cart-slice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        // product: productReducer // If we have multiple reducer, then we have to pass those as well
    }
})

export default store