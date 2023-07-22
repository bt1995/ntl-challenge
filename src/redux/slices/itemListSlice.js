import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: null,
    itemList: null,
    error:null
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
    }
})

export const { setLoading, setError, setItemList } = itemListSlice.actions

export default itemListSlice.reducer