import React from "react";
import { PostList } from "./PostRetriever.js";

export function PostsDisplayer() 
  {
    // eventually implement selecting genre/filtering on homepage, but later

    // here is where we'd filter that list as needed
    // in the return, we categorize post divs by genre
    return (
        <div class="d-grid gap-2">
          <PostList />
        </div> );
  }
  
//ReactDOM.render(<App />, document.getElementById("postsList"));
  