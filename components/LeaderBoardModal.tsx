import { useState, useContext } from "react";
import Link from "next/link";
import { TimerContext } from "../lib/timerContext";
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../lib/firebase'
import toast from "react-hot-toast";

const LeaderBoardModal: React.FC<{ isOver: boolean, level: string}> = (props) => {
  const [name, setName] = useState("");

  const timerContext = useContext(TimerContext);
  
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const submitHandler = async () => { 
    //submit name and time to firestore and close modal then redirect to leaderboard
    try {
     await addDoc(collection(db, props.level), {
        name: name,
        time: timerContext.count,
      });
      toast.success("Document written");
    } catch (e) {
      toast.error("Error adding document");
    }
  };

  const cancelHandler = () => {
    setName("");
  };

  if (!props.isOver) return null;

  return (
    <>
      <div className="modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50"></div>
      <div className="bg-white flex flex-col gap-10 items-center p-5 sm:p-12 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 h-96 max-w-lg z-50">
        <h1 className="text-2xl font-bold">Get on the leaderboard!</h1>
        <div className="flex flex-col text-xl font-semibold">
          <label htmlFor="name">Display Name</label>
          <input
            onChange={nameHandler}
            type="text"
            value={name}
            name="name"
            id="name"
            className="border-2 border-black rounded-md pr-1 pl-1"
          />
        </div>
        <div className="flex justify-center items-center gap-10">
          <Link href="/leaderboard"><button
            onClick={submitHandler}
            className="rounded-lg w-fit p-3 bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-slate-500 text-xl active:scale-95 font-semibold"
          >
            Add me
          </button></Link>
          <Link href="/leaderboard"><button
            onClick={cancelHandler}
            className=" hover:bg-rose-600 text-xl rounded-lg bg-rose-500 w-fit p-3 shadow-md shadow-slate-500 active:scale-95 font-semibold"
          >
            Im Slow
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default LeaderBoardModal;
