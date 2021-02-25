import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import * as Styles from '../styles/components/profileStyles';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <Styles.Container>
            <Styles.Image src="https://github.com/paulinho68.png" alt="Paulo Vitor" />
            <Styles.Content>
                <Styles.TextName>Paulo Vitor</Styles.TextName>
                <Styles.TextLevel>
                    <Styles.IconLevel src="icons/level.svg" alt="Level" />
                    Level {level}
                </Styles.TextLevel>
            </Styles.Content>
        </Styles.Container>
    )
}