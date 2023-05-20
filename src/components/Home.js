import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {collection, onSnapshot, query} from 'firebase/firestore';
import {db} from '../firebase';

// Home component
function Home() {
  //define state for posts
  const [posts, setPosts] = useState([]);

  //function fetch the posts from posts collection in firebase
  const fetchPostsData = () => {
    //query to fetch the posts from collection
    const q = query(collection(db, 'posts'));

    //update the posts data in client when firebase data is updated
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        console.log(data);
        return data;
      });

      //update the posts state
      setPosts(posts);
    });
  }

  useEffect(() => {
    fetchPostsData();

  }, []);

  return (
    <div className="home">
      {/* Home component Header */}
      <h1>Tech Blog</h1>
      <div id="blog-by">Shivaraj</div>

      {/* Display the posts on home page */}
      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}
  
export default Home;