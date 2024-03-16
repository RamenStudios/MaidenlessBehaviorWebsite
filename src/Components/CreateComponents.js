import React from "react";
import MainModule from "./Main/Main.js";

// import header
import { Header, playOnMouseover } from "./Header/Header.js";


const CreateComponents = () => {
  return (
    <div>
        <Header />
        <MainModule />
    </div>
  );
};


export default CreateComponents;
