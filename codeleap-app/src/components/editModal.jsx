function EditModal() {
  return (
    <div>
      <h3>Edit item</h3>
      <label htmlFor="modal-form-title">
        Title
        <input type="text" name="modalFormTitle" id="modal-form-title" />
      </label>
      <label htmlFor="form-content">
        Content
        <input type="text" name="formTitle" id="form-content" />
      </label>
      <button>Cancel</button>
      <button>Save</button>
    </div>
  )
}

export default EditModal