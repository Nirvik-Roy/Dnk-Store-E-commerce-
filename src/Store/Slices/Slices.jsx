import {createSlice} from "@reduxjs/toolkit"

const items = localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : []
const cartSlice = createSlice({
    name:'cart',
    initialState:items,
    reducers:{
        addElement(state,action){
          
            if(state.length==0){
                state.push(action.payload)
            }else{
                let existingItem=state.find((item)=>{
                    return item.id===action.payload.id
                })
                if(existingItem){
                    existingItem.quantity = action.payload.quantity
                    existingItem.total=existingItem.price*existingItem.quantity
                }else{
                    state.push(action.payload)
                }
            }
            localStorage.setItem('cart',JSON.stringify(state.map((item)=>item)))
        },
        removeElement(state,action){
           let itemExist= state.find((item)=>{
             return item.id==action.payload
           })
           if(itemExist){
           state.splice(state.indexOf(itemExist),1)
           }
           localStorage.setItem('cart',JSON.stringify(state.map((item)=>item)))
        },
        updateElement(state,action){
            let itemExist = state.find((item)=>{
               return item.id==action.payload.id
            })
            if(itemExist){
                itemExist.quantity=action.payload.quan
                itemExist.total=action.payload.Price*action.payload.quan
            }
            localStorage.setItem('cart',JSON.stringify(state.map((item)=>item)))
        },
    }
})

export const {addElement, removeElement, updateElement} = cartSlice.actions
export {cartSlice}