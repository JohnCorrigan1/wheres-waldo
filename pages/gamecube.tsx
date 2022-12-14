import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import GameHeader from "../components/GameHeader";
import LeaderBoardModal from "../components/LeaderBoardModal";

const GameCube: NextPage = () => {
  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMonkey, setIsMonkey] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isLuigi, setIsLuigi] = useState(false);
  const [isMonkeyClicked, setIsMonkeyClicked] = useState(false);
  const [isLinkClicked, setIsLinkClicked] = useState(false);
  const [isLuigiClicked, setIsLuigiClicked] = useState(false);

  const selectionHandler = (e: any) => {
    setXCord(e.pageX);
    setYCord(e.pageY);
    if (!isOpen) {
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
    }
    if (pageX >= 20 && pageX <= 27 && pageY >= 43 && pageY <= 46) {
      setIsMonkey(true);
    } else if (pageY >= 48 && pageY <= 51 && pageX >= 79 && pageX <= 84) {
      setIsLuigi(true);
    } else if (pageY >= 65 && pageY <= 68 && pageX >= 64 && pageX <= 73) {
      setIsLink(true);
    }
    setIsOpen(!isOpen);
  };

  const mouseHandler = (e: any) => {
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

  const monkeyHandler = () => {
    if (!isMonkeyClicked && isMonkey) {
      setIsMonkeyClicked(true);
      toast.success("You found AiAi!");
    } else if (!isMonkeyClicked && !isMonkey) {
      toast.error("That's not AiAi");
      setIsMonkey(false);
      setIsLink(false);
      setIsLuigi(false);
    } else if (isMonkeyClicked) {
      toast.error("You already found AiAi");
      setIsMonkey(false);
      setIsLink(false);
      setIsLuigi(false);
    }
  };

  const luigiHandler = () => {
    if (!isLuigiClicked && isLuigi) {
      setIsLuigiClicked(true);
      toast.success("You found Luigi");
    } else if (!isLuigiClicked && !isLuigi) {
      toast.error("That's not Luigi");
      setIsMonkey(false);
      setIsLink(false);
      setIsLuigi(false);
    } else if (isLuigiClicked) {
      toast.error("You already found Luigi");
      setIsMonkey(false);
      setIsLink(false);
      setIsLuigi(false);
    }
  };

  const linkHandler = () => {
    if (!isLinkClicked && isLink) {
      setIsLinkClicked(true);
      toast.success("You found Link");
    } else if (!isLinkClicked && !isLink) {
      toast.error("That's not Link");
      setIsMonkey(false);
      setIsLink(false);
      setIsLuigi(false);
    } else if (isLinkClicked) {
      toast.error("You already found Link");
      setIsMonkey(false);
      setIsLink(false);
      setIsLuigi(false);
    }
  };

  return (
    <div
      onMouseMove={mouseHandler}
      onClick={selectionHandler}
      className="flex gamecube font-body"
    >
      <Head>
        <title>Where is Everyone?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>{`.items-container{
    top: ${yCord - 20}px;
    left: ${xCord + 35}px;`}</style>

      <GameHeader
        isChar3={isLuigiClicked}
        isChar2={isMonkeyClicked}
        isChar1={isLinkClicked}
        isOver={isMonkeyClicked && isLinkClicked && isLuigiClicked}
        char1Image="/link.webp"
        char2Image="/aiai-nobg.png"
        char3Image="/luigi.png"
      />

      {isMonkeyClicked && isLinkClicked && isLuigiClicked && (
        <LeaderBoardModal
          isOver={isMonkeyClicked && isLinkClicked && isLuigiClicked}
          level={"gamecube"}
        />
      )}

      {isOpen ? (
        <div className="rounded-md bg-slate-600 text-2xl font-semibold absolute items-container cursor-pointer shadow-lg bg-opacity-80 text-zinc-200">
          {!isLuigiClicked && (
            <h1
              className={
                (isLuigiClicked ? "line-through" : "") +
                "border-black border-b-2 hover:bg-slate-400 p-2 rounded-t-md flex items-center"
              }
              onClick={luigiHandler}
            >
              Luigi
              <Image src="/luigi.png" width={60} height={0} alt="logo" />
            </h1>
          )}
          {!isLinkClicked && (
            <h1
              className="border-black border-b-2 p-2 hover:bg-slate-400 flex gap-5 items-center"
              onClick={linkHandler}
            >
              Link
              <Image
                src="/link.webp"
                width={50}
                height={0}
                alt="logo"
                className="mr-5"
              />
            </h1>
          )}
          {!isMonkeyClicked && (
            <h1
              className="p-2 rounded-b-md hover:bg-slate-400 flex gap-4"
              onClick={monkeyHandler}
            >
              AiAi
              <Image src="/aiai-nobg.png" width={50} height={50} alt="logo" />
            </h1>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GameCube;
