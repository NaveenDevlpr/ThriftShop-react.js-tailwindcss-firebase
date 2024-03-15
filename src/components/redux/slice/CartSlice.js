import {createSlice,createSelector} from '@reduxjs/toolkit'

export const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.splice(action.payload,1)
        }
    }
})

export const {addToCart,removeItem} =cartSlice.actions
export default cartSlice.reducer

export const selectCartLength = createSelector(
    (state) => state.cart, 
    (cart) => cart.length 
  );