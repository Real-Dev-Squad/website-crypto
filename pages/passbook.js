import TransactionHistory from '../components/passbook';
import TransactionData from '../mock/passbookData.json';
import { Footer } from '../components/footer';
import NavBar from '../components/NavBar';
import personData from '../mock/person.json';

export default function Passbook() {
  return (
    <div>
      <NavBar personData={personData} />
      <TransactionHistory transactions={TransactionData} />
      <Footer />
    </div>
  );
}
