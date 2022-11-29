//1.import
import React from "react";

//2.create a component
//1.createClass 2.Class 3.Function 4.Arrow function =>
//function component

function Home() {
  return (
    //jsx
    <div>
      <h1 className="text-success">Welcome to Sony Movies! </h1>
      <p>A one stop destination for all the movie buffs!</p>
    </div>
  );
}

//3.Export a component - make the comp available
export default Home;
