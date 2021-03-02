import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import * as Styles from '../styles/components/LevelUpModalStyles';

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    return (
        <Styles.Overlay>
            <Styles.Container className="animate__animated animate__fadeIn">
                <Styles.Header>{level}</Styles.Header>
                <Styles.TextTitle>Parabéns</Styles.TextTitle>
                <Styles.TextModal>Você alcançou um novo level.</Styles.TextModal>
                <Styles.CloseButton type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Close modal" />
                </Styles.CloseButton>
            </Styles.Container>
        </Styles.Overlay>
    )
}