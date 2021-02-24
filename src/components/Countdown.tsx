import { useEffect, useState } from 'react';
import * as Styles from '../styles/components/CountdownStyles';

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [start, setStart] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if (start && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    }, [start, time]);

    function handleClick() {
        setStart(!start);
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
            {start ? (
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
    );
}