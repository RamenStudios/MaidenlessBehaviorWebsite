import React from "react";
import MainModule from "./Main/Main.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import header
import { Header, playOnMouseover } from "./Header/Header.js";

// import posts displayer
import { PostsDisplayer } from "./PostView/PostsDisplayer.js";

// import home display
import { HomeDisplay } from "./Static/Home.js";

// import team display
import { TeamDisplay } from "./Static/Team.js";

const Components = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomeDisplay />} />
          <Route path="/team" element={<TeamDisplay />} />
          <Route path="/devlog" element={<PostsDisplayer />} />
          <Route path="/https://discord.gg/xHcqBwKeas" element={<Link to="https://discord.gg/xHcqBwKeas"></Link>} />
          <Route path="/https://github.com/darien-v/HumanResources-WIP" element={<Link to="https://github.com/darien-v/HumanResources-WIP"></Link>} />
        </Routes>
      </Router>
    </div>
  );
};

export default Components;
