import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HomeHeader from "../components/HomeHeader";
import LevelPreview from "../components/LevelPreview";
import { LevelContext } from "../lib/levelContext";
import { useContext } from "react";

const Home: NextPage = () => {
  const levelContext = useContext(LevelContext);

  const gameCubeHandler = () => {
    levelContext.setLevel("gamecube");
  };

  const n64Handler = () => {
    levelContext.setLevel("n64");
  };

  const wiiHandler = () => {
    levelContext.setLevel("wii");
  };

  return (
    <div className="home bg-neutral-800  font-body">
      <Head>
        <title>Where is Everyone?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
      </Head>

      <HomeHeader />

      <div className="flex flex-col items-center mt-10 text-zinc-100">
        <h2 className="mb-5 text-2xl font-semibold">Instructions</h2>
        <p>Each level with have three characters to find</p>
        <p>You can see the characters in the header and everytime you click</p>
        <p>Click on the characters to find them!</p>
      </div>

      <div className="grid grid-cols-3 gap-10 mr-5 ml-5 md:mr-10 md:ml-10 mt-10 grid-container">
        <div onClick={gameCubeHandler}>
          <Link href="/gamecube">
            <LevelPreview
              levelName="Gamecube"
              levelImage="/gamecube-nobg.png"
              character1="/link.webp"
              character2="/luigi.png"
              character3="/aiai-nobg.png"
            />
          </Link>
        </div>
        <div onClick={wiiHandler}>
          <Link href="/wii">
            <LevelPreview
              levelName="Wii"
              levelImage="/wii-preview.png"
              character1="/toad.png"
              character2="/samus.png"
              character3="/wii_fit.png"
            />
          </Link>
        </div>
        <div onClick={n64Handler}>
          <Link href="/n64">
            <LevelPreview
              levelName="N64"
              levelImage="/n64Console.png"
              character1="/falcon.png"
              character2="/donkeyKong.png"
              character3="/fox.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
