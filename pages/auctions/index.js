import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import Link from 'next/link';
import { Footer } from '@components/footer';
import HandleAuctions from '@components/Auctions';
import styles from '@components/Auctions/Auctions.module.css';

const Auctions = () => {
  return (
    <div>
      <NavBar personData={personData} />
      <Link href="/auctions/new">
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
