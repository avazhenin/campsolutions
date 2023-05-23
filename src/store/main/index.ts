import { createSlice } from "@reduxjs/toolkit";
import { IMainState, SLICE_NAME } from "./types";

// Define the initial state using that type
const initialState: IMainState = {

}

export const baseSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
    }
})

// export const {  } = baseSlice.actions

export default baseSlice.reducer  