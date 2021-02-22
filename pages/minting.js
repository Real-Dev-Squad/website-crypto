import React from 'react';

import MintingUser from '@components/minting-user';
import { Footer } from '@components/footer';
import personData from '../mock/person.json';

import { StateProvider } from 'stores/minting';
import NavBar from '@components/NavBar';

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
        <NavBar personData={personData} />
        {users.map((u) => (
          <MintingUser key={u} username={u} />
        ))}
        <Footer />
      </div>
    </StateProvider>
  );
}
