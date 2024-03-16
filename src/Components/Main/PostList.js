import React, { useEffect, useState } from "react";
import {
  createPost,
  getAllPosts,
  getById,
  removePost
} from "../../Common/Services/PostService";
import PostForm from "./PostForm";

/* ADAPTED FROM LECTURE 14 EXAMPLE */

/* STATEFUL PARENT COMPONENT */
const PostList = () => {
  // Variables in the state to hold data
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
    });

    // getById("xm4edVKNUF").then((post) => {
    //   console.log(post);
    //   setPost(post);
    // });
  }, []);

  // Flags in the state to watch for add/remove updates
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure title + content state variables are defined
    if (title && content && add) {
      createPost(title, content).then((newPost) => {
        setAdd(false);
        // Add the newly created post to the posts array
        // to render the new list of posts (thru spread/concatination)
        setPosts([...posts, newPost]);

        //Note: CANNOT MANIPULATE STATE ARRAY DIRECTLY
        //posts = posts.push(post)
        //setPosts(posts)
      });
    }

    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old posts list to take out selected post
      const newPosts = posts.filter((post) => post.id !== remove);
      setPosts(newPosts);

      removePost(remove).then(() => {
        console.log("Removed post with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
  }, [title, content, posts, add, remove]);

  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create post and
    // re-render list with new post
    setAdd(true);
  };

  // Handler to track changes to the child input text for TITLE
  const onChangeTitleHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating values to be added on submit
    setTitle(e.target.value);
  };

  // Handler to track changes to the child input text for CONTENT
  const onChangeContentHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // Continuously updating values to be added on submit
    setContent(e.target.value);
  };

  return (
    <div>
      <hr />
      <div>
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <div>
                <span>
                  {/* Using getter for post Object to display title and content */}
                  <li key={post.id}>{post.get("title")}: {post.get("content")}</li>{" "}
                  {/* Button with inline click handler to obtain 
                  instance of post for remove state variable*/}
                  <button
                    onClick={(e) => {
                      // Set remove variable and trigger re-render
                      setRemove(post.id);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p> Post by ID: </p>
        {/* Check that the post object exists */}
        {posts.length > 0 && (
          <ul>
            {/* Using getter for post Object to display id */}
            {posts.map((post) => (
              <li key={post.id}> {post.id}: {post.get("title")} </li>
            ))}
          </ul>
        )}
      </div>
      {/* Stateless Child component passing up events from form */}
      <PostForm onClick={onClickHandler} onChangeTitle={onChangeTitleHandler} onChangeContent={onChangeContentHandler} />
    </div>
  );
};

export default PostList;
