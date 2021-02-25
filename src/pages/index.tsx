import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox as RighContainer } from '../components/ChallengeBox';
import Head from 'next/head';
import * as Styles from '../styles/home';
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <Styles.Container>
      <Head>
        <title>Home | move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <Styles.Section>
          <Styles.LeftContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </Styles.LeftContainer>
          <RighContainer />
        </Styles.Section>
      </CountdownProvider>
    </Styles.Container>
  )
}
