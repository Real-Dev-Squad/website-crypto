import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import Link from 'next/link';
import { Footer } from '@components/footer';
import CreateNewAuction from '@components/Auctions/createNewAuction';
import styles from '@components/Auctions/Auctions.module.css';

const NewAuction = () => {
  return (
    <div>
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
