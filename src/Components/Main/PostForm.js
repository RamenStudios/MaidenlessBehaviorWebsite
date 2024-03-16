import React from "react";

/* ADAPTED FROM LECTURE 14 EXAMPLE */

/* STATELESS CHILD COMPONENT */
const PostForm = ({ onChangeTitle, onChangeContent, onClick }) => {
  return (
    <div>
      <hr />
      <form>
        <p>Title</p>
        <input text="title" onChange={onChangeTitle} />
        <p>Content</p>
        <input text="content" onChange={onChangeContent} />
        <button type="submit" onChange={onClick}>
          Submit Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
