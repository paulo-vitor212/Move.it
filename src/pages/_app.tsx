import GlobalStyle from '../styles/global';
import ChallengesProvider from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </>
  )
}

export default MyApp
