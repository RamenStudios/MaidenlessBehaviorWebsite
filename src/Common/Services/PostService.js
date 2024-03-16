import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS - POSTS */

/* ADAPTED FROM LECTURE 14 EXAMPLE */

// CREATE operation - new post with Title
export const createPost = (PostTitle, ) => {
  console.log("Creating: ", PostTitle);
  const Post = Parse.Object.extend("Post");
  const post = new Post();
  // using setter to UPDATE the object
  post.set("Title", PostTitle);
  return post.save().then((result) => {
    // returns new Post object
    return result;
  });
};

// READ operation - get post by ID
export const getPostById = (id) => {
  const Post = Parse.Object.extend("Post");
  const query = new Parse.Query(Post);
  return query.get(id).then((result) => {
    // return Post object with objectId: id
    return result;
  });
};

// READ operation - get all posts in Parse class Post
export const getAllPosts = () => {
  const Post = Parse.Object.extend("Post");
  const query = new Parse.Query(Post);
  return query.find().then((results) => {
    // returns array of Blog objects
    return results;
  });
};

// DELETE operation - remove post by ID
export const removePost = (id) => {
  const Post = Parse.Object.extend("Post");
  const query = new Parse.Query(Post);
  return query.get(id).then((post) => {
    post.destroy();
  });
};
