import '../styles/editModalStyle.css'

function EditModal() {
  return (
    <div className='edit-modal-body'>
      <h3>Edit item</h3>
      <form className='modal-post-form'>
        <label htmlFor="modal-form-title">
          Title
          <input type="text" name="modal-form-title" id="modal-form-title" />
        </label>
        <label htmlFor="modal-form-content">
          Content
          <textarea name="modal-form-title" id="modal-form-content" rows="3"/>
        </label>
      </form>
      <div className='modal-buttons'>
        <button className='cancel-button'>Cancel</button>
        <button className='save-button'>Save</button>
      </div>
    </div>
  )
}

export default EditModal