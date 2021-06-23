import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
const HomeComponent = loadable(
  () => import("../../components/homeComponent/homeComponent"),
  {
    ssr: true,
  }
);

const HomePage = () => {
  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default HomePage;
