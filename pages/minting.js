import React from 'react';

import MintingUser from '@components/minting-user';
import { Footer } from '@components/footer';

import { StateProvider } from 'stores/minting';

const users = [
  'ankush',
  'sumitdhanania',
  'harshith',
  'swaraj',
  'akanksha',
  'nikhil',
  'rucha',
  'om',
  'kratika',
  'ankur',
];

export default function Minting() {
  return (
    <StateProvider>
      <div>
        {users.map((u) => (
          <MintingUser key={u} username={u} />
        ))}
        <Footer />
      </div>
    </StateProvider>
  );
}
