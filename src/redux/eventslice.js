import { createSlice } from '@reduxjs/toolkit'

//initialstate
const initialState = {Events:[]}

const EventSlice = createSlice({
    name:'event',
    initialState,
    reducers:{
        addNewEvent:(state,action)=>{
            const itemIndex=state.Events.findIndex((item)=>item.photo ===action.payload.photo);
            if(itemIndex<0){
                state.Events.push(action.payload)
            }
        },
        DeleteOneEvent:(state,action)=>{
            state.Events=state.Events.filter((item,index)=>{
                return index !== action.payload
            })
        }
    }
})
export const { addNewEvent, DeleteOneEvent }= EventSlice.actions
export default EventSlice.reducer
