import React from "react";
import Spinner from "../../components/Spinner/Loader";
import Poland from "../../components/PolandMap/PolandMap";
import "./_homePage.scss";

const Home_Page = () => {
  return (
    <div className="homePage">
      <div className="wrapperTEST">
        <br />
        <br />
        <br />
        <Poland />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        HOME PAGE
        {/* <Spinner /> */}
      </div>
    </div>
  );
};

export default Home_Page;
