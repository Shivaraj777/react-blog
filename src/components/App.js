import {Navbar, Home, PostDetail, CreatePost} from './';
import {Routes, Route} from 'react-router-dom';
import {StyleRoot} from 'radium';

function App() {
  return (
    <StyleRoot>
      <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/post/:postId" Component={PostDetail} />
        <Route exact path="/create-post" Component={CreatePost} />
      </Routes>
    </div>
    </StyleRoot>
  );
}

export default App;
