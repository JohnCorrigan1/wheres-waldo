import { defaultConfig } from "next/dist/server/config-shared";
import { useState, useEffect } from "react";

//timer component that keeps track of seconds on the page
const Timer: React.FC<{ isOver: boolean }> = (props) => {
    const [count, setCount] = useState(0);

    useEffect(
            () => {
                const timer = () => {
                    setCount(count + 1);
                }
    
                // if you want it to finish at some point
                if (props.isOver) {
                    return;
                }
                const id = setInterval(timer, 1000);
                return () => clearInterval(id);
            },
            [count]
        );

    return (
        <div>
        <h1 className="timer text-2xl text-zinc-200 font-semibold">{count}s</h1>
        </div>
    );
}

export default Timer;