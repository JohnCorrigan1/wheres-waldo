import Image from "next/image";
import Timer from "./Timer";

const GameHeader: React.FC<{
  isChar1: boolean;
  isChar2: boolean;
  isChar3: boolean;
  char1Image: string;
  char2Image: string;
  char3Image: string;
  isOver: boolean;
}> = (props) => {
  return (
    <div className="flex justify-between p-3 pl-10 pr-10 w-full fixed bg-slate-800 bg-opacity-80 items-center">
      <div className="flex gap-5">
        {!props.isChar1 && (
          <Image
            src={props.char1Image}
            width={50}
            height={50}
            alt="logo"
            className=""
          />
        )}
        {!props.isChar2 && (
          <Image src={props.char2Image} width={50} height={50} alt="logo" />
        )}
        {!props.isChar3 && (
          <Image src={props.char3Image} width={50} height={50} alt="logo" />
        )}
      </div>
      <div className="">
        <Timer isOver={props.isOver} />
      </div>
    </div>
  );
};

export default GameHeader;
