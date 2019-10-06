import React from "react";
import Spinner from "../../components/Loader/Loader";
import Poland from "../../components/PolandMap/PolandMap";
import Slider from "../../components/Slider/Slider";
import "./_homePage.scss";

const Home_Page: React.FC = () => {
  return (
    <div className="homePage">
      <div className="wrapper">
        <article className="homePage__MapSLiderWrapper">
          <section className="homePage__polandMapWrapper">
            <p>Znajdź atrakcje w danym województwie</p>
            <div className="homePage__map">
              <Poland />
            </div>
          </section>
          <section className="homePage__slider">
            <Slider />
          </section>
        </article>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        HOME PAGE
        <Spinner />
      </div>
    </div>
  );
};

export default Home_Page;
