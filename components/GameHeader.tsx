import Image from "next/image";
import { useState } from 'react'
import Timer from "./Timer";

const GameHeader: React.FC<{ isLuigiClicked: boolean, isMonkeyClicked: boolean, isLinkClicked: boolean, isOver: boolean }> = (props) => {

    // const [seconds, setSeconds] = useState(0);

    // const timer = () => {
    //     setSeconds(seconds + 1);
    // }
    // setInterval(timer, 1000);

    // timer to calculate seconds on the page
    // const [seconds, setSeconds] = useState(0);
    // const timer = () => {
    //     setSeconds(seconds + 1);
    // }
    // setInterval(timer, 1000);



  return (
    <div className="flex justify-between p-3 pl-10 pr-10 w-full fixed bg-slate-800 bg-opacity-80 items-center">
        <div className="flex">
           { !props.isLinkClicked && <Image src="/link.webp" width={60} height={0} alt="logo" className="mr-5"/> }
           { !props.isMonkeyClicked && <Image src="/aiai.webp" width={100} height={50} alt="logo"/> }
           { !props.isLuigiClicked && <Image src="/luigi.png" width={60} height={0} alt="logo"/> }
      </div>
      <div className="">
        {/* <h1 className="text-3xl text-zinc-100">{seconds}</h1> */}
        <Timer isOver={props.isOver} />
      </div>

    </div>
  );
};

export default GameHeader;
