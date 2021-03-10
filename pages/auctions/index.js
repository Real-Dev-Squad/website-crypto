import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import { Footer } from '@components/footer';
import HandleAuctions from '@components/Auctions';

const Auctions = () => {
  return (
    <div>
      <NavBar personData={personData} />
      <HandleAuctions />
      <Footer />
    </div>
  );
};

export default Auctions;
