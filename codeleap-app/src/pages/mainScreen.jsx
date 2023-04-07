import DeleteModal from "../components/deleteModal"
import EditModal from "../components/editModal"
import Post from "../components/post"
import PostForm from "../components/postForm"

function MainScreen() {
  return (
    <div>
      <header>
        <h2>CodeLeap Network</h2>
      </header>
      {/* <PostForm /> */}
      {/* <Post /> */}
      <DeleteModal />
      {/* <EditModal /> */}
    </div>
  )
}

export default MainScreen