import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../types";

const initialState: IPost[] = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<IPost>) => {
      state.push(action.payload);
    },
    setPost: (state, action: PayloadAction<IPost[]>) => {
      action.payload.map((p) => state.push(p));
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.filter((p) => p.id !== action.payload);
    },
    editPost: (
      state,
      action: PayloadAction<{ id: number; title: string; body: string }>
    ) => {
      state.map((p) => {
        if (p.id === action.payload.id) {
          p.title = action.payload.title;
          p.body = action.payload.body;
        }
        return p;
      });
    },
  },
});

export const selectPost = (state: any) => state.post;
export const { deletePost } = postSlice.actions;
export default postSlice.reducer;
