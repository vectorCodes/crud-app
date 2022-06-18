import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postSlice } from "../Redux/Reducer/post";
import { PostData } from "../types";

const Api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createPost = createAsyncThunk(
  "createPost",
  async (data: PostData, thunkApi) => {
    try {
      const response = await Api.post("posts", data);
      thunkApi.dispatch(postSlice.actions.addPost(response.data));
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchPost = createAsyncThunk("fetchPost", async (_, thunkApi) => {
  try {
    const response = await Api.get("/posts");
    thunkApi.dispatch(postSlice.actions.setPost(response.data));
    return response.data.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
});

export const deletePost = createAsyncThunk(
  "deletepost",
  async (id: number, thunkApi) => {
    try {
      const response = await Api.delete(`/posts/${id}`);
      thunkApi.dispatch(postSlice.actions.deletePost(id));
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const editpost = createAsyncThunk(
  "editPost",
  async (
    { id, title, body }: { id: number; title: string; body: string },
    thunkApi
  ) => {
    try {
      const response = await Api.put(`/posts/${id}`);
      thunkApi.dispatch(
        postSlice.actions.editPost({
          id,
          title,
          body,
        })
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
