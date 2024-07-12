import {configureStore} from "@reduxjs/toolkit"
import { cartSlice } from "./Store/Slices/Slices"

const store =configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store;