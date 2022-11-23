import { useEffect, useContext } from "react";
import { TimerContext } from "../lib/timerContext";

//timer component that keeps track of seconds on the page
const Timer: React.FC<{ isOver: boolean }> = (props) => {

const timerContext = useContext(TimerContext);

  useEffect(() => {
    const timer = () => {
      timerContext.setCount(timerContext.count + 1);
    };
    if (props.isOver) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [timerContext.count]);

  return (
    <div>
      <h1 className="timer text-2xl text-zinc-200 font-semibold">{timerContext.count}s</h1>
    </div>
  );
};

export default Timer;
