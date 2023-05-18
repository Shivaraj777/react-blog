import {Link} from 'react-router-dom';

function Navbar() {
    return (
      <div className="">
        <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-post">Create Post</Link>
          </li>
          <li>
            <Link to="/post/:postId">Post Detail</Link>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;