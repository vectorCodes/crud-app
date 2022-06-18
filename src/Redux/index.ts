import { configureStore } from "@reduxjs/toolkit";

import Post from "./Reducer/post";

export const store = configureStore({
  reducer: {
    posts: Post,
  },
});
