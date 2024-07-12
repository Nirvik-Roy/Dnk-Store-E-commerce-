import {createSlice} from "@reduxjs/toolkit"
import { act } from "react"

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
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
        },
        removeElement(state,action){
       let exist=state.map((e)=>e.id==action.payload)
       state.splice(state.indexOf(exist),1)
        },
        updateElement(){},
    }
})

export const {addElement, removeElement, updateElement} = cartSlice.actions
export {cartSlice}