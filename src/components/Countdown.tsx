import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import * as Styles from '../styles/components/CountdownStyles';


export function Countdown() {
    const { handleClick, hasFinished, isStart, minutes, seconds } = useContext(CountdownContext);

    const [leftMinute, rightMinute] = String(minutes).padStart(2, '0').split('');
    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('');

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