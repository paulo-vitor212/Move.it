import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import * as Styles from '../styles/components/completedChallengesStyles';

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <Styles.Container>
            <Styles.FirstSpan>Desafios completos</Styles.FirstSpan>
            <Styles.SecondSpan>{challengesCompleted}</Styles.SecondSpan>
        </Styles.Container>
    )
}