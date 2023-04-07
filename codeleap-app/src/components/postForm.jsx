import '../styles/postFormStyle.css'

function PostForm() {
  return (
    <div className='post-form-body'>
      <h3>What’s on your mind?</h3>
      <form>
        <label htmlFor="form-title">
          Title
          <input type="text" name="formTitle" id="form-title" />
        </label>
        <label htmlFor="form-content">
          Content
          <textarea name="formTitle" id="form-content" rows="3"/>
        </label>
        <button className='create-post-button'>Create</button>
      </form>
    </div>
  )
}

export default PostForm