import TransactionOperation from '@components/transaction-operation';
import React, { useEffect, useState } from 'react';
import receivers from '../../mock/receivers';
const OperationModal = ({ transactionType, personData }) => {
  const [modal, showModal] = useState(false);
  useEffect(() => {
    if (transactionType) {
      showModal((prev) => !prev);
    }
  }, [transactionType]);
  return (
    <div>
      <TransactionOperation
        modal={modal}
        showModal={showModal}
        personData={personData}
        receivers={receivers}
        transactionType={transactionType}
      />
    </div>
  );
};

export default OperationModal;
