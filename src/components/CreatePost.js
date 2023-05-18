import React, {useState} from 'react';

function CreatePost() {
  //create the state for data
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');

  //function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("title:", title);
    console.log("subTitle:", subTitle);
    console.log("content:", content);
  }

  //render the Create Post component
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input value={title} onChange={ (e) => {setTitle(e.target.value)} }/>
        </div>
        <div className="form-field">
          <label>Sub Title</label>
          <input value={subTitle} onChange={ (e) => {setSubTitle(e.target.value)} } />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea value={content} onChange={ (e) => {setContent(e.target.value)} } ></textarea>
        </div>
        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}
  
  export default CreatePost;