import React, { useState, useEffect } from 'react';
import {
  createPost,
  getAllPosts,
  getPostById,
  removePost
} from "../../Common/Services/PostService";
import { Posts } from "./Posts";
  


  const PostList = () => {
    // Variables in the state to hold data
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);
    const [postTitle, setPostTitle] = useState();
  
    // UseEffect to run when the page loads to
    // obtain async data and render
    useEffect(() => {
      getAllPosts().then((posts) => {
        setPosts(posts);
      });
    }, []);

    // Flags in the state to watch for add/remove updates
    const [add, setAdd] = useState(false);
    const [remove, setRemove] = useState("");

  // UseEffect that runs when changes
  // are made to the state variables/flags
  useEffect(() => {
    // Check for add flag and make sure title + content state variables are defined
    if (postTitle && add) {
      createPost(postTitle).then((newPost) => {
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
  }, [postTitle, posts, add, remove]);

    return (
      <div class="container-xl">
          {posts.map((post)=>( 
            <div class="d-grid gap-2 mb-4">
              {/* creates a button with basic post overview */} {console.log(post.get("createdAt"))}
              <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target={'#'+(post.id)} aria-expanded="false" aria-controls={'#'+(post.id)}>
                {post.get("Title")} | Posted: {post.get("createdAt").toDateString()} | Last Updated: {post.get("updatedAt").toDateString()}
              </button>
              <div class="collapse" id={post.id}>
                <div class="card"><div class="card-body">
                  <div dangerouslySetInnerHTML={{__html: post.get("Content")}}></div>
                </div></div>
              </div>
            </div>)
          )}
      </div>
    );
}

  export { PostList };