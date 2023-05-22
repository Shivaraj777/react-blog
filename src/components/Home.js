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
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <PostSubTitle>{post.subTitle}</PostSubTitle>
        </div>
      ))}
    </div>
  );
}

const styles = {
  heading: {
    marginTop: 30,
    fontSize: 40
  }
}
  
export default Home;