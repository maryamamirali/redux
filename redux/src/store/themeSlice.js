import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme:'grey',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
    setTheme: (state , data) => {
    state.theme = data.payload
    },
},
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer