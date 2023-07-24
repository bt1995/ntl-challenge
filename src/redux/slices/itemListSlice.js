import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemCount: localStorage.getItem('cartListAmount')
}

const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        setItemCount: (state, action) => {
            state.itemCount = action.payload
        },
    }
})

export const { setItemCount } = itemListSlice.actions

export default itemListSlice.reducer