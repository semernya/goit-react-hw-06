import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    name: ''
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        changeFilter: {
            reducer(state, action) {
                state.name = action.payload;
            },
            prepare(filter) {
                return {
                    payload: {
                        name: filter,
                    }
                }
            }
        }
    }
})

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = state => state.name;
