import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";


interface CountdownContextProps {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isStart: boolean,
    handleClick: () => void,
};

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextProps);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isStart, setIsStart] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
        if (isStart && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isStart && time === 0) {
            startNewChallenge();
            setHasFinished(true);
            setIsStart(false);
        }
    }, [isStart, time]);

    function handleClick() {
        const resetTime = () => {
            clearTimeout(countdownTimeout);
            setTime(25 * 60);
        }

        if (time === 0) {
            resetTime();
            setHasFinished(false);
        } else if (isStart) {
            resetTime();
            setIsStart(false);
        } else {
            setIsStart(true);
        }
    }

    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isStart,
            handleClick
        }}>
            {children}
        </CountdownContext.Provider>
    )
}

