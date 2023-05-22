import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {collection, onSnapshot, query} from 'firebase/firestore';
import {db} from '../firebase';
import styled from 'styled-components';

//creating a CSS component for styling Blog Heading by susing styled-components
const BlogHeading = styled.h1`
  text-align: center;
  color: #2196f3;
  margin-bottom: 2px;
`;

const PostSubTitle = styled.p`
  font-size: 13px;
`;

//using nesting in styled-components
const Post = styled.div`
  border: 1px solid #e1e1e1;
  padding: 10px 10px;
  border-radius: 5px;
  margin-top: 10px;

  // on hover style is applied to parent component
  &:hover {  
    border: 1px solid #2196f3
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
  h3:hover {
    color: #2196f3;
  }

  a {
    text-decoration: none;
  }
`;

// Home component
function Home() {
  //define state for posts
  const [posts, setPosts] = useState([]);

  //function fetch the posts from posts collection in firebase
  const fetchPostsData = () => {
    //query to fetch the posts from collection
    const q = query(collection(db, 'posts'));

    //update the posts data in client when firebase data is updated
    onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        // console.log(data);
        return data;
      });

      //update the posts state
      setPosts(posts);
    });
  }

  //use useEffect hook to achieve componentDidUpdate() functionality
  useEffect(() => {
    fetchPostsData();

  }, []);

  return (
    <div className="home">
      {/* Home component Header */}
      <BlogHeading>One-Piece Blog</BlogHeading>
      <div id="blog-by">Shivaraj</div>

      {/* Display the posts on home page */}
      {posts.map((post, index) => (
        <Post key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subTitle}</PostSubTitle>
        </Post>
      ))}
    </div>
  );
}

// const styles = {
//   heading: {
//     marginTop: 30,
//     fontSize: 40
//   }
// }
  
export default Home;