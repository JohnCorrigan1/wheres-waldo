import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../lib/firebase";
import LeaderboardData from "../models/LeaderboardData.";


const Leaderboard: NextPage = () => {

const [leaderboardData, setLeaderboardData] = useState<LeaderboardData[]>([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      const q = query(collection(db, "leaderboard"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
       setLeaderboardData((prevData) => {
         return [...prevData, doc.data() as { name: string; time: number }]});
        // console.log(doc.data());
      });
    };
    getLeaderboard();
    // console.log("leaderboardData", leaderboardData);
  }, []);

  return (
    <div className=" flex  flex-col leaderboard bg-neutral-800 text-zinc-100">
      <div className="flex justify-center">
        <h1 className="mt-10 text-3xl font-bold">Leaderboard</h1>
      </div>
      <div className="bg-zinc-300 text-black mt-10 p-3 mr-5 ml-5 rounded-lg sm:mr-10 sm:ml-10">
        <div className="flex justify-between pl-3 pr-3 sm:pl-10 sm:pr-10 ">
          <h1 className="text-xl font-bold sm:text-2xl">Position</h1>
          <h1 className="text-xl font-bold sm:text-2xl">Name</h1>
          <h1 className="text-xl font-bold sm:text-2xl">Time</h1>
        </div>
        {/* {leaderboardData.length > 0 && ( */}
          <div>
            {leaderboardData?.map((data, index) => {
              console.log(data);
              return (
                <div className="flex justify-between pl-3 pr-3 sm:pr-10 sm:pl-10" key={index}>
                  <h1 className="text-2xl font-bold">{index + 1}</h1>
                  <h1 className="text-2xl font-bold">{data.name}</h1>
                  <h1 className="text-2xl font-bold">{data.time}</h1>
                </div>
              );
            })}
          </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Leaderboard;
