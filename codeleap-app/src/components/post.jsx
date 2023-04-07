import '../styles/postStyle.css'
import editIcon from '../assets/edit_icon.svg'
import deleteIcon from '../assets/delete_icon.svg'

function PostSection() {
  return (
    <div className='post'>
      <header className='post-header'>
        <h3>Title</h3>
        <div>
          <img src={editIcon} alt="" />
          <img src={deleteIcon} alt="" />
        </div>
      </header>
      <div className='post-body'>
        <div className='post-data'>
          <p>@Creator</p>
          <p>xx minutes ago</p>
        </div>
        <p className='post-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue semper facilisis. Nulla eget finibus risus. Mauris sed feugiat est. Praesent nec accumsan sem, ut feugiat massa. Nulla eget orci sit amet risus pellentesque auctor ut vel nulla. Nulla et porttitor neque. Phasellus laoreet diam ultricies enim efficitur tristique.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue semper facilisis. Nulla eget finibus risus. Mauris sed feugiat est. Praesent nec accumsan sem, ut feugiat massa. Nulla eget orci sit amet risus pellentesque auctor ut vel nulla. Nulla et porttitor neque. Phasellus laoreet diam ultricies enim efficitur tristique.
        </p>
      </div>
    </div>
  )
}

export default PostSection