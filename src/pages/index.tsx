import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import * as Styles from '../styles/home';

export default function Home() {
  return (
    <Styles.Container>
      <ExperienceBar />

      <Styles.Section>
        <Styles.LeftContainer>
          <Profile />
        </Styles.LeftContainer>
        <div>

        </div>
      </Styles.Section>
    </Styles.Container>
  )
}
