import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import Link from 'next/link';
import { Footer } from '@components/footer';
import Head from 'next/head';
import CreateNewAuction from '@components/Auctions/createNewAuction';
import styles from '@components/Auctions/Auctions.module.css';

const NewAuction = () => {
  return (
    <div>
      <Head>
        <title>Create New Auction | Crypto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar personData={personData} />
      <Link href="/auctions">
        <a>
          <h2 className={styles.auctionPageNavigation}>Go Back</h2>
        </a>
      </Link>
      <CreateNewAuction />
      <Footer />
    </div>
  );
};

export default NewAuction;
