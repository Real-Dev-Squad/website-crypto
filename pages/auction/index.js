import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import Link from 'next/link';
import { Footer } from '@components/footer';
import Head from 'next/head';
import HandleAuctions from '@components/Auction';
import styles from '@components/Auction/Auction.module.css';

const Auctions = () => {
  return (
    <div>
      <Head>
        <title>Auction | Crypto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar personData={personData} />
      <Link href="/auction/new">
        <a>
          <h2 className={styles.auctionPageNavigation}>Create New Auction</h2>
        </a>
      </Link>
      <HandleAuctions />
      <Footer />
    </div>
  );
};

export default Auctions;
