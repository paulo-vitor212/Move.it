import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox as RightContainer } from '../components/ChallengeBox';
import * as Styles from '../styles/home';
import { CountdownProvider } from "../contexts/CountdownContext";
import ChallengesProvider from '../contexts/ChallengesContext';

interface HomeProps {
  level: number,
  currentExperience: number,
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
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
            <RightContainer />
          </Styles.Section>
        </CountdownProvider>
      </Styles.Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 1,
    challengesCompleted: 1
  }
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
