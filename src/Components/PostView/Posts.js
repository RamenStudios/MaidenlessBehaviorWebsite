import React from 'react';
// this file is the framework for displaying the list of posts

// function for opening a post container
// allows collapse elements to function on click even when not in default bootstrap format
// for use later
/*
export function collapseToggle(id) 
{
  let collapsible = id+"Collapse";
  $(collapsible).collapse({toggle: true});
  console.log("toggled "+collapsible);
}
*/

// exports posts of a certain type, called "title" for code consistency
// renders them as a card, where the type is the header
// and when clicked, it expands into the list of posts
const Posts = ({ postTitle, children, onChangePostTitle, onClick }) => {
  return (
      <div>
      <hr />
      <form>
        <p>Post Title</p>
        <input text="postTitle" onChange={onChangePostTitle} />
        <button type="submit" onChange={onClick}>
          Submit Post
        </button>
      </form>
    </div>

  );
};

export { Posts } ;