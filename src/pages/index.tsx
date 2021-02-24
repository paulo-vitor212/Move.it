import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';
import * as Styles from '../styles/home';

export default function Home() {
  return (
    <Styles.Container>
      <Head>
        <title>Home | move.it</title>
      </Head>
      <ExperienceBar />

      <Styles.Section>
        <Styles.LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </Styles.LeftContainer>
        <div>

        </div>
      </Styles.Section>
    </Styles.Container>
  )
}
