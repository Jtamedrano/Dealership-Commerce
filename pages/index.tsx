import type { NextPage } from "next";
import Head from "next/head";
import { Jumbotron, SquareGrid } from "../components/parts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auto Dealer</title>
      </Head>
      <h1>Auto Dealer</h1>
      <div className="Home__jumbotron">
        <Jumbotron />
      </div>
      <div className="Home__square_grid">
        <SquareGrid />
      </div>
      <div>Search By Car Type Goes Here</div>
      <div>
        Services Listed
        <ul>
          <li>Shop By Price Range</li>
          <li>Finance Options</li>
          <li>Vehicle Service</li>
        </ul>
      </div>
      <div>Contact and Map</div>
      <div>SEO Content</div>
    </>
  );
};

export default Home;
