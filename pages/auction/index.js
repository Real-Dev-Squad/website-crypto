import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import Link from 'next/link';
import { Footer } from '@components/footer';
import Head from 'next/head';
import HandleAuctions from '@components/Auction';
import styles from '@components/Auction/Auction.module.css';
import GlobalStyles from '@components/Dark-Theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { useDarkModeContext } from 'stores/dark-mode-context';

const Auctions = () => {
  const [
    theme,
    themeData,
    themeToggler,
    mountedComponent,
  ] = useDarkModeContext();

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeData}>
      <>
        <GlobalStyles />
        <div>
          <Head>
            <title>Auction | Crypto</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <NavBar personData={personData} />
          <Link href="/auction/new">
            <div className={styles.newAuctionBtnContainer}>
              <button className={styles.newAuctionBtn}>
                Create New Auction
              </button>
            </div>
          </Link>
          <HandleAuctions />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
};

export default Auctions;
