import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        numItemsInCart:0,
        cartTotal:0,
        shipping:500,
        tax:0,
        orderTotal:0
    },
    reducers:{
        addItem:(state, {payload})=>{
            let bol = false, id = 0
            if(state.cartItems.length){
                state.cartItems.forEach((item, idx)=>{
                    if(item.cartID == payload.cartID){
                        bol = true
                        id = idx
                    }
                })
            }
            if(bol){
                state.cartItems[id].amount += payload.amount
            }else{
                state.cartItems.push(payload)
            }
        }
    }
})
export const {addItem   } = cartSlice.actions
export default cartSlice.reducer 