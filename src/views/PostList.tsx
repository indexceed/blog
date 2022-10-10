import { useQuery } from "react-query";

import { getPosts } from "../api/post.api";
import { PostCard, Post } from "../components";



export const PostList = () => {

  getPosts()
  const{data, isLoading, error} = useQuery('getPosts', getPosts)
  

  if(isLoading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>Loading Error</p>
  }

  return (
    <>
         <div className="mainContainer">   
        <div className="body">
          <div className="postContainer">

            { data!?.map((post:Post) => {
                return (
                  <div key={post.id}>
                    <PostCard
                      id={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  </div>
                )
              })
            }

          

          </div>
        </div>
      </div>

    </>
  )
}
