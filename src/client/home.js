import React from "react";

const Home = () => {
  return (
    <div>
      <div>hello click down</div>
      <button onClick={() => console.log("you clicked")}>click here</button>
    </div>
  );
};

export default Home;
