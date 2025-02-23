import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  notes: [],
};

export const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action) => {
      state.notes[action.payload.index] = action.payload.data;
    },
    deleteNote: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const { addNote, deleteNote, updateNote } = NotesSlice.actions;
export default NotesSlice.reducer;
