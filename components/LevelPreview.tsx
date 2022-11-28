import Image from "next/image"

const LevelPreview: React.FC<{ character1: string, character2: string, character3: string, levelName: string, levelImage: string}> = (props) => {
    return (
        <div className="flex flex-col items-center bg-violet-900 rounded-xl hover:scale-105 text-zinc-100 p-10  hover:border-4 duration-200 cursor-pointer">
            <h1 className="text-2xl font-semibold mb-5">{props.levelName}</h1>
            <Image src={props.levelImage} height={250} width={250} alt="gamecube" />
            <div className="flex flex-col items-center">
                <h2 className="mb-5">You are looking for...</h2>
                <div className="flex gap-5 h-16">
                    <Image src={props.character1} height={50} width={50} alt={props.character1} />
                    <Image src={props.character2} height={50} width={50} alt={props.character2} />
                    <Image src={props.character3} height={50} width={50} alt={props.character3} />
                </div>
            </div>
        </div>
    )
}

export default LevelPreview;
