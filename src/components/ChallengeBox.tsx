import * as Styles from '../styles/components/ChallengeBoxStyles';

export function ChallengeBox() {
    const hasActiveChallenge = true;
    return (
        <Styles.Container>
            {hasActiveChallenge ? (
                <Styles.ChallangeActive>
                    <Styles.Header>
                        Ganhe 400 xp
                    </Styles.Header>
                    <Styles.Main>
                        <Styles.IconBody src="icons/body.svg" alt="Body" />
                        <strong>Novo desafio</strong>
                        <p>É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>

                        <Styles.Footer>
                            <Styles.ButtonFailed>Falhei</Styles.ButtonFailed>
                            <Styles.ButtonSuccess>Completei</Styles.ButtonSuccess>
                        </Styles.Footer>
                    </Styles.Main>
                </Styles.ChallangeActive>
            ) : (
                    <Styles.ChallangeNotActive>
                        <Styles.TextStrong>
                            Inicie um ciclo para receber desafios a serem completados
                        </Styles.TextStrong>
                        <Styles.SubText>
                            <Styles.IconLevelUp src="icons/level-up.svg" alt="levelUp" />
                            <p>
                                Avance de level completando desafios
                            </p>
                        </Styles.SubText>
                    </Styles.ChallangeNotActive>
                )
            }
        </Styles.Container>
    )
}