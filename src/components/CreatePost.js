import {db} from '../firebase.js'
import {addDoc, collection} from 'firebase/firestore';
import React from 'react';
import { useFormData } from '../hooks.js';
// import classes from '../button.module.css';
import styled, {css} from 'styled-components';

//Adding styles dynamically by using styled components
const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'blue')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  //to add multiple styles dynamically at run-time we use css property from styled-compoents
  ${(props) => props.primary && css`
    border: 1px solid ${props.bgColor};
  `}
`;

function CreatePost() {
  //create the state for data
  const title = useFormData('');
  const subTitle = useFormData('');
  const content = useFormData('');

  //function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("title:", title.value);
    console.log("subTitle:", subTitle.value);
    console.log("content:", content.value);

    //add the form data to firestore database
    const newPost = await addDoc(collection(db, 'posts'), {
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date()
    });

    console.log('New post added successfully', newPost);
  }

  //render the Create Post component
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content} ></textarea>
        </div>
        {/* <button className={classes.createPostBtn}>Create Post</button> */}
        <StyledButton primary bgColor='red'>Create Post</StyledButton>
      </form>
    </div>
  );
}
  
  export default CreatePost;