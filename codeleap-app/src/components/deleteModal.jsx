import '../styles/deleteModalStyle.css'

function DeleteModal() {
  return (
    <div className="delete-modal-body">
      <h3>Are you sure you want to delete this item?</h3>
      <div className='modal-buttons'>
        <button className='cancel-button'>Cancel</button>
        <button className='delete-button'>Delete</button>
      </div>
    </div>
  )
}

export default DeleteModal