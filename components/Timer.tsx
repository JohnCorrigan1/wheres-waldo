import { defaultConfig } from "next/dist/server/config-shared";
import { useState } from "react";

//timer component that keeps track of seconds on the page
const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const timer = () => {
        setSeconds(seconds + 1);
    }
    setInterval(timer, 1000);
    return (
        <div>
        <h1>{seconds}s</h1>
        </div>
    );
}

export default Timer;