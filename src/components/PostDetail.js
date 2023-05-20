import {useState, useEffect} from 'react';
import {db} from '../firebase.js';
import {doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';

//Post Deatil component
function PostDetail() {
  //set the state for post
  const [post, setPost] = useState({});
  const {postId} = useParams();   //get the Post Id from url using useParams() hook

  //get the post Details from firebase
  useEffect(() => {
    (async function(){
      const docRef = doc(db, 'posts', postId);
      const postSnap = await getDoc(docRef);
      setPost(postSnap.data());
    })();
    
  }, [postId]);

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;