import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeHeader from "../components/HomeHeader";
import LevelPreview from "../components/LevelPreview";

const Home: NextPage = () => {
  return (
    <div className="home bg-neutral-800">
      <Head>
        <title>Where is Everyone?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <HomeHeader />
        
        <div className="flex flex-col items-center mt-10 text-zinc-100">
            <h2 className="mb-5 text-2xl font-semibold">Instructions</h2>
            <p>Each level with have three characters to find</p>
            <p>You can see the characters in the header and everytime you click</p>
            <p>Click on the characters to find them!</p>
        </div>

        <div className="">
            <LevelPreview levelName="Gamecube" levelImage="/gamecube.jpg" character1="/link.webp" character2="/luigi.png" character3="/aiai.webp"/>
        </div>


    </div>
  );
};

export default Home;
