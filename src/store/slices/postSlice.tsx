import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../../components';

interface SliceState{
  postState: {
    post: {
      id: number,
      title: string,
      body: string,
    }
  }
}

const initialState = {
    post: {
    id: 0,
    title: 'title',
    body: 'content',
    }
}

export const postSlice = createSlice({
  name: 'postState',
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.post = action.payload;
      
    },
  },
})

export const { setPost } = postSlice.actions
export const selectPost = (state:SliceState) => state.postState.post

export default postSlice.reducer