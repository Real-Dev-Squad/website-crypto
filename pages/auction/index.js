import Link from 'next/link';
import { Footer } from '@components/footer';
import Head from 'next/head';
import Image from 'next/image';
import HandleAuctions from '@components/Auction';
import styles from '@components/Auction/Auction.module.css';

const Auctions = () => {
  return (
    <div>
      <Head>
        <title>Auction | Crypto</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Link href="/auction/new">
        <div className={styles.auctionButtonContainer}>
          <button className={styles.auctionButton}>
            <div className={styles.auctionButtonContentWrapper}>
              <Image width="18" height="20" src="/assets/white-plus-icon.svg" />
              <p>Create New Auction</p>
            </div>
          </button>
        </div>
      </Link>
      <HandleAuctions />
      <Footer />
    </div>
  );
};

export default Auctions;
