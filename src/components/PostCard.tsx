import { Link } from "react-router-dom"

export interface Post {
    id: number,
    title: string,
    body: string,

}

export const PostCard = (post:Post) => {
    
  return (
   
        <Link className="post" to={'/details'}>
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
        </Link>
  )
}
