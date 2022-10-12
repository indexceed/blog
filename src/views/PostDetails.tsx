import type { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import {selectPost} from '../store/slices/postSlice'

export const PostDetails = () => {

  
  const post = useSelector(selectPost)
  console.log(post)

  return (
    <>
      <div className="detailsMainContainer">

        <div>
          <div className="detailsTitle">
            <h1>{post.title}</h1>
          </div>
          <div className="detailsDate">
            <p>{post.id}</p>
          </div>
        </div>
        
        <div className="detailsBodyContainer">
          <div className="detailsImg">
            <img src="" alt="img" />
          </div>
          <div className="detailsText">
            <p>
             {post.body}
            </p>
          </div>
        </div>

      </div>
    </>
    
  )
}
