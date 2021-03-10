import personData from '../../mock/person.json';
import NavBar from '@components/NavBar';
import { Footer } from '@components/footer';
import CreateNewAuction from '@components/Auctions/createNewAuction';

const NewAuction = () => {
  return (
    <div>
      <NavBar personData={personData} />
      <CreateNewAuction />
      <Footer />
    </div>
  );
};

export default NewAuction;
