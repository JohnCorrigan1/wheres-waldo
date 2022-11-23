import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../lib/firebase";
const Leaderboard: NextPage = () => {

  //retrieve data from firestore
  const leaderBoardData: {name: string, time: number}[] = [];

    useEffect(() => {
        const getLeaderboard = async () => {
            const q = query(collection(db, "leaderboard"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                leaderBoardData.push(doc.data() as {name: string, time: number});
                console.log(doc.data())
            });
        }
        getLeaderboard();
    }, []);
    


    return (
        <div className="leaderboard bg-neutral-800 text-zinc-100">
        <h1>Leaderboard</h1>
        </div>
    );
    };

export default Leaderboard;
