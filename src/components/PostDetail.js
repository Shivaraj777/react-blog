import React, {useState, useEffect} from 'react';
import {db} from '../firebase.js';
import {doc, getDoc} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Radium from 'radium';

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
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.postDetail}>{post.content}</p>
    </div>
  );
}

//applying styles using radium library
const styles = {
  heading: {
    textAlign: 'center',

    ':hover': {
      color: 'red'
    }
  },
  postDetail: {
    border: '1px solid #e1e1e1',
    padding: 5,
    paddingTop: 10,

    '@media(max-width: 720px)': {
      color: 'pink'
    }
  }
};

//Radium is a higher order component which takes a Component as input
export default Radium(PostDetail);