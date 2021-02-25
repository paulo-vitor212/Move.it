import { useEffect, useState } from 'react';
import * as Styles from '../styles/components/CountdownStyles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isStart, setIsStart] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if (isStart && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isStart && time === 0) {
            console.log('finalizou');
            setHasFinished(true);
            setIsStart(false);
        }
    }, [isStart, time]);

    function handleClick() {
        if (isStart) {
            clearTimeout(countdownTimeout);
            setTime(0.1 * 60);
        }
        setIsStart(!isStart);
    }

    return (
        <>
            <Styles.Container>
                <Styles.NumbersContainer>
                    <Styles.LeftSpan>
                        {leftMinute}
                    </Styles.LeftSpan>
                    <Styles.RightSpan>
                        {rightMinute}
                    </Styles.RightSpan>
                </Styles.NumbersContainer>
                <Styles.PointSpan>:</Styles.PointSpan>
                <Styles.NumbersContainer>
                    <Styles.LeftSpan>
                        {leftSecond}
                    </Styles.LeftSpan>
                    <Styles.RightSpan>
                        {rightSecond}
                    </Styles.RightSpan>
                </Styles.NumbersContainer>
            </Styles.Container>
            {hasFinished ? (
                <Styles.CountdownDisabledButton onClick={handleClick} disabled>
                    Ciclo encerrado
                </Styles.CountdownDisabledButton>
            ) : (
                    <>
                        {isStart ? (
                            <Styles.CountdownPauseButton onClick={handleClick}>
                                Abandonar ciclo
                            </Styles.CountdownPauseButton>
                        ) : (
                                <Styles.CountdownButton onClick={handleClick}>
                                    Iniciar um ciclo
                                </Styles.CountdownButton>
                            )
                        }
                    </>
                )}
        </>
    );
}