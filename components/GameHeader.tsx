import Image from "next/image";

const GameHeader: React.FC<{ isLuigiClicked: boolean, isMonkeyClicked: boolean, isLinkClicked: boolean }> = (props) => {
  return (
    <div className="flex justify-between p-3 pl-10 pr-10 w-full fixed bg-slate-800 bg-opacity-80 items-center">
        <div className="flex">
           { !props.isLinkClicked && <Image src="/link.webp" width={60} height={0} alt="logo" className="mr-5"/> }
           { !props.isMonkeyClicked && <Image src="/aiai.webp" width={100} height={50} alt="logo"/> }
           { !props.isLuigiClicked && <Image src="/luigi.png" width={60} height={0} alt="logo"/> }
      </div>
      <div className="">
        <h1 className="text-3xl text-zinc-100">10.6s</h1>
      </div>

    </div>
  );
};

export default GameHeader;
