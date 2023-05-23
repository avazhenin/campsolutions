import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IThemeState, SLICE_NAME, ThemeMode } from "./types";

const initialState: IThemeState = {
    theme: ThemeMode.Light,
}

export const themeSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<{ theme: ThemeMode }>) => {
            state.theme = action.payload.theme;
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer

export * from './types'