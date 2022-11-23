import { useState, createContext, useContext } from "react";

type TimerContextType = {
    count: number;
    setCount: (count: number) => void;
}

type Props = {
    children?: React.ReactChild | React.ReactChild[];
  };

export const TimerContext = createContext<TimerContextType>({
    count: 0,
    setCount: () => {}
});


export const TimerProvider: React.FC<Props> = (props) => {
    const [count, setCount] = useState(0);

    return (
        <TimerContext.Provider value={{ count, setCount }}>
            {props.children}
        </TimerContext.Provider>
    );
};
