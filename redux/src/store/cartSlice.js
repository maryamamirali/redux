import { createSlice } from '@reduxjs/toolkit'

const initialState = {
cart: []
}

export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
    addtocart: (state , data) => {
    state.cart.push(data.payload)
    },    
    deltocart: (state , data) => {
    state.cart.pop(data.payload)
    },
},
})

// Action creators are generated for each case reducer function
export const { addtocart , deltocart } = cartSlice.actions

export default cartSlice.reducer