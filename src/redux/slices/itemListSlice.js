import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: null,
    itemList: null,
    error:null,
    itemCount: localStorage.getItem('cartListAmount')
}

const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setItemList: (state, action) => {
            state.itemList = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setItemCount: (state, action) => {
            state.itemCount = action.payload
        },
    }
})

export const { setLoading, setError, setItemList, setItemCount } = itemListSlice.actions

export default itemListSlice.reducer