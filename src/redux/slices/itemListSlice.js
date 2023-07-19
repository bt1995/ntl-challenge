import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemList: null
}

const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        setItemList: (state, action) => {
            state.itemList = action.payload
        }
    }
})

export const { setItemList } = itemListSlice.actions

export default itemListSlice.reducer