import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../components';

interface SliceState{
  postState: {
      post: Post
    }
}

interface PostState{
      post: Post
}

const initialState = {
    post: null
}

export const postSlice = createSlice({
  name: 'postState',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<any>) => {
      state.post = action.payload;
    },
  },
})

export const { setPost } = postSlice.actions
export const selectPost = (state: SliceState) => state.postState.post;


export default postSlice.reducer