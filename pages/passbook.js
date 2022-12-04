import TransactionHistory from '@components/passbook';
import TransactionData from '../mock/passbookData.json';
import { Footer } from '@components/footer';

export default function Passbook() {
  return (
    <div>
      <TransactionHistory transactions={TransactionData} />
      <Footer />
    </div>
  );
}
