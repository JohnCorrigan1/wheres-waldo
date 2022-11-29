import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import LeaderboardData from "../models/LeaderboardData.";
import Link from "next/link";
import { LevelContext } from "../lib/levelContext";
import { TimerContext } from "../lib/timerContext";

const Leaderboard: NextPage = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);

  const levelContext = useContext(LevelContext);
  const timerContext = useContext(TimerContext);
  
  const timeHandler = () => {
    timerContext.setCount(0);
  };

  const data: LeaderboardData[] = [];

  useEffect(() => {
    const getLeaderboard = async () => {
      const q = query(collection(db, levelContext.level));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as LeaderboardData);
      });
      setLeaderboardData(data.sort((a, b) => a.time - b.time));
    };
    getLeaderboard();
  }, []);

  return (
    <div className=" flex  flex-col leaderboard bg-neutral-800 text-zinc-100 p-5 sm:p-10 sm:pr-20 sm:pl-20 font-body">
      <Head>
        <title>Where is Everyone?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="mt-10 text-3xl font-bold">Leaderboard</h1>
        <div className="flex gap-10">
        <Link href={"/" + levelContext.level}><button onClick={timeHandler} className="p-2 bg-cyan-600 rounded-lg font-semibold shadow shadow-white active:scale-95 hover:bg-cyan-700">Play Again</button></Link>
        <Link href="/"><button onClick={timeHandler} className="p-2 bg-cyan-600 rounded-lg font-semibold shadow shadow-white active:scale-95 hover:bg-cyan-700">Head Home</button></Link>
        </div>
      </div>
      <div className="  text-black mt-10 sm:mr-10 sm:ml-10 md:mr-20 md:ml-20 mb-10 rounded-t-lg">
        <div className="grid grid-header bg rounded-t-lg pt-5 pb-5 bg-slate-600">
          <h1 className="text-xl font-bold sm:text-2xl w-1/4 justify-self-center">
            Position
          </h1>
          <h1 className="text-xl font-bold sm:text-2xl w-1/2 text-center justify-self-center">
            Name
          </h1>
          <h1 className="text-xl font-bold sm:text-2xl w-1/4 text-right justify-self-center">
            Time
          </h1>
        </div>
        <div className="">
          {leaderboardData?.map((data, index) => {
            console.log(data);
            return (
              <div
                className={
                  index % 2 === 0 && index + 1 === leaderboardData.length
                    ? "bg-violet-600 grid grid-header p-2 rounded-b-lg"
                    : index + 1 === leaderboardData.length
                    ? "bg-violet-400 grid grid-header p-2 rounded-b-lg"
                    : index === 0 || index % 2 === 0
                    ? "bg-violet-600 grid grid-header p-2"
                    : "bg-violet-400 grid grid-header p-2"
                }
                key={index}
              >
                <h1 className="text-2xl font-semibold justify-self-center">
                  {index + 1}.
                </h1>
                <h1 className="text-2xl font-semibold justify-self-center">
                  {data.name}
                </h1>
                <h1 className="text-2xl font-semibold justify-self-center">
                  {data.time}s
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
