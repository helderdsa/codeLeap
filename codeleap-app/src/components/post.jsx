import '../styles/postStyle.css'

function PostSection() {
  return (
    <div>
      <header>
        <h3>Title</h3>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </header>
      <p>@Creator</p>
      <p>xx minutes ago</p>
      <p>Content</p>
    </div>
  )
}

export default PostSection