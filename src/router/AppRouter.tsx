import { Routes, Route } from "react-router-dom"
import { PostDetails, PostList } from "../views"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/details" element={<PostDetails />} />
        </Routes>
    </>
  )
}
