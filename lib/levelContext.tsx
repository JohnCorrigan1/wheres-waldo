import { useState, createContext, useContext } from "react";

type LevelContextType = {
    level: string;
    setLevel: (level: string) => void;
}

type Props = {
    children?: React.ReactChild | React.ReactChild[];
  };

export const LevelContext = createContext<LevelContextType>({
    level: "",
    setLevel: () => {}
});


export const LevelProvider: React.FC<Props> = (props) => {
    const [level, setLevel] = useState("");

    return (
        <LevelContext.Provider value={{ level, setLevel }}>
            {props.children}
        </LevelContext.Provider>
    );
};
