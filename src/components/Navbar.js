import {Link} from 'react-router-dom';
import styled from 'styled-components';

//styling a component used from third party library
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;

  a:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
    return (
      <div className="">
        <ul id="nav">
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/create-post">Create Post</StyledLink>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;