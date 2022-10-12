import { useNavigate } from "react-router-dom"
import { setPost } from '../store/slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import {selectPost} from '../store/slices/postSlice'

export interface Post {
    id: number,
    title: string,
    body: string,
}



export const PostCard = (post:Post) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const actualPost = useSelector(selectPost)

    const actionClick = () => {
        console.log(post)
        dispatch(setPost(post))
        navigate('/details')
    }
    
  return (
        <a className="post"   
              onClick={() => actionClick()}>

            <div className="postTitleMovil">
                <p>{post.title}</p>
            </div>
            <div className="postImg">
                <img src="" alt="img" />
            </div>
            
            <div className="postText">
                <div className="postTitleDesk">
                    <p>{post.title}</p>
                </div>
            <div className="postContent">
                <p>Id Post {post.id}</p>
                <p>{post.body}</p>
            </div>
            </div>
        </a>
  )
}
