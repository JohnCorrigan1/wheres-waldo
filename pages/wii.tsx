import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { toast } from "react-hot-toast";
import React, { useState } from "react";
import GameHeader from "../components/GameHeader";
import LeaderBoardModal from "../components/LeaderBoardModal";

const Wii: NextPage = () => {
  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isSamus, setIsSamus] = useState(false);
  const [isWiiFit, setIsWiiFit] = useState(false);
  const [isToad, setIsToad] = useState(false);
  const [isSamusClicked, setIsSamusClicked] = useState(false);
  const [isWiiFitClicked, setIsWiiFitClicked] = useState(false);
  const [isToadClicked, setIsToadClicked] = useState(false);

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
    if (pageX >= 69 && pageX <= 76 && pageY >= 44 && pageY <= 47) {
      setIsSamus(true);
    } else if (pageY >= 59 && pageY <= 62 && pageX >= 32 && pageX <= 40) {
      setIsToad(true);
    } else if (pageY >= 30 && pageY <= 34 && pageX >= 17 && pageX <= 20) {
      setIsWiiFit(true);
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

  const samusHandler = () => {
    if (!isSamusClicked && isSamus) {
      setIsSamusClicked(true);
      toast.success("You found Samus!");
    } else if (!isSamusClicked && !isSamus) {
      toast.error("That's not Samus!");
      setIsSamus(false);
      setIsWiiFit(false);
      setIsToad(false);
    } else if (isSamusClicked) {
      toast.error("You already found Samus!");
      setIsSamus(false);
      setIsWiiFit(false);
      setIsToad(false);
    }
  };

  const toadHandler = () => {
    if (!isToadClicked && isToad) {
      setIsToadClicked(true);
      toast.success("You found Toad");
    } else if (!isToadClicked && !isToad) {
      toast.error("That's not Toad");
      setIsSamus(false);
      setIsWiiFit(false);
      setIsToad(false);
    } else if (isToadClicked) {
      toast.error("You already found Toad");
      setIsSamus(false);
      setIsWiiFit(false);
      setIsToad(false);
    }
  };

  const wiifitHandler = () => {
    if (!isWiiFitClicked && isWiiFit) {
      setIsWiiFitClicked(true);
      toast.success("You found WiiFit");
    } else if (!isWiiFitClicked && !isWiiFit) {
      toast.error("That's not WiiFit");
      setIsSamus(false);
      setIsWiiFit(false);
      setIsToad(false);
    } else if (isWiiFitClicked) {
      toast.error("You already found WiiFit");
      setIsSamus(false);
      setIsWiiFit(false);
      setIsToad(false);
    }
  };

  return (
    <div
      onMouseMove={mouseHandler}
      onClick={selectionHandler}
      className="flex wii"
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
        isChar1={isToadClicked}
        isChar2={isSamusClicked}
        isChar3={isWiiFitClicked}
        isOver={isSamusClicked && isWiiFitClicked && isToadClicked}
        char1Image="/toad.png"
        char2Image="/samus.png"
        char3Image="/wii_fit.png"
      />

      {isSamusClicked && isWiiFitClicked && isToadClicked && (
        <LeaderBoardModal
          isOver={isSamusClicked && isWiiFitClicked && isToadClicked}
          level={"wii"}
        />
      )}

      {isOpen ? (
        <div className="rounded-md bg-slate-600 text-2xl font-semibold absolute items-container cursor-pointer shadow-lg bg-opacity-80 text-zinc-200">
          {!isToadClicked && (
            <h1
              className=
                "border-black border-b-2 hover:bg-slate-400 p-2 rounded-t-md flex items-center"
              onClick={toadHandler}
            >
              Toad
              <Image src="/toad.png" width={50} height={50} alt="logo" />
            </h1>
          )}
          {!isSamusClicked && (
            <h1
              className="border-black border-b-2 p-2 hover:bg-slate-400 flex gap-5 items-center"
              onClick={samusHandler}
            >
              Samus
              <Image
                src="/samus.png"
                width={50}
                height={50}
                alt="logo"
                className="mr-5"
              />
            </h1>
          )}
          {!isWiiFitClicked && (
            <h1
              className="p-2 rounded-b-md hover:bg-slate-400 flex gap-4"
              onClick={wiifitHandler}
            >
              Wii Fit
              <Image src="/wii_fit.png" width={50} height={50} alt="logo" />
            </h1>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Wii;
