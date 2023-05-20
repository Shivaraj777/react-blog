import {db} from '../firebase.js'
import {addDoc, collection} from 'firebase/firestore';
import React, {useState} from 'react';
import { useFormData } from '../hooks.js';

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

    console.log('New post added successfully');
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
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}
  
  export default CreatePost;