import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
// import CharacterSelection from '../components/characterSelection';

const Home: NextPage = () => {
  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const selectionHandler = (e: any) => {
    setXCord(e.pageX);
    setYCord(e.pageY);
    setIsOpen(!isOpen);
  };

  const mouseHandler = (e: any) => {
    // console.log(e)
    // setXCord(e.clientX);
    // setYCord(e.clientY);
    setPageX(
      Math.round(
        (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
      )
    );
    setPageY(
      Math.round(
        (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
      )
    );
  };

  return (
    <div
      onMouseMove={mouseHandler}
      onClick={selectionHandler}
      className="flex home"
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`.items-container{
    top: ${yCord}px;
    left: ${xCord}px;`}</style>
    
      {isOpen ? (
        <div
          className={`rounded-md bg-zinc-100 text-2xl font-semibold h-28 p-3 absolute items-container`}
        >
          <h1 className="border-black border-b-2">Mario</h1>
          <h1 className="border-black border-b-2">Link</h1>
          <h1>Someone else</h1>
        </div>
      ) : (
        <></>
      )}

      <div className="flex flex-col gap-5 text-rose-400 text-3xl fixed top-10 left-10">
        <h1>X: {xCord}</h1>
        <h1>Y: {yCord}</h1>
        <h1>page X: {pageX}</h1>
        <h1>page Y: {pageY}</h1>
      </div>
    </div>
  );
};

export default Home;
