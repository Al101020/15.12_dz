import { createSlice } from "@reduxjs/toolkit";
import {
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_SUCCESS,
  CHANGE_SEARCH_FIELD,
} from "../actions/actionTypes";

const initialState = { items: [], loading: false, error: null, search: "" };

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SEARCH_SKILLS_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SEARCH_SKILLS_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(SEARCH_SKILLS_SUCCESS, (state, action) => {
        state.items = action.payload.items;
        state.loading = false;
        state.error = null;
      })
      .addCase(CHANGE_SEARCH_FIELD, (state, action) => {
        state.search = action.payload.search;
      });
  },
});

export default skillsSlice.reducer;
